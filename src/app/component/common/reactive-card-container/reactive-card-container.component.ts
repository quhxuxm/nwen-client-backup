import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, Input, OnInit} from '@angular/core';
import {CardDataPlaceHolder} from '../../../vo/card-data-place-holder';

@Component({
  selector: 'nwen-reactive-card-container',
  templateUrl: './reactive-card-container.component.html',
  styleUrls: ['./reactive-card-container.component.scss']
})
export class ReactiveCardContainerComponent implements OnInit {
  private BREAKPOINT_COLUMN_NUMBER: Map<string[], number> = new Map<string[], number>([
    [[Breakpoints.XSmall], 1],
    [[Breakpoints.Small], 2],
    [[Breakpoints.Medium], 3],
    [[Breakpoints.Large, Breakpoints.XLarge], 4]
  ]);
  @Input()
  maxColumnNumber: number;
  @Input()
  cardPlaceHolders: CardDataPlaceHolder<any>[];
  columnNumber: number;
  cardColumns: CardDataPlaceHolder<any>[][];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.cardColumns = [];
    this.maxColumnNumber = 4;
  }

  ngOnInit() {
    if (this.maxColumnNumber > 4 || this.maxColumnNumber <= 0) {
      this.maxColumnNumber = 4;
    }
    this.columnNumber = this.maxColumnNumber;
    if (!this.cardPlaceHolders) {
      return;
    }
    if (this.cardPlaceHolders.length < this.columnNumber) {
      this.columnNumber = this.cardPlaceHolders.length;
      this.BREAKPOINT_COLUMN_NUMBER.forEach((v, k, m) => {
        this.breakpointObserver.observe(k)
          .subscribe(
            () => {
              if (this.breakpointObserver.isMatched(k)) {
                this.columnNumber = v;
                if (this.columnNumber > this.maxColumnNumber) {
                  this.columnNumber = this.maxColumnNumber;
                }
                if (this.columnNumber > this.cardPlaceHolders.length) {
                  this.columnNumber = this.cardPlaceHolders.length;
                }
                this.refreshCardColumns();
              }
            }
          );
      });
    }
  }

  public refreshCardColumns(): void {
    this.cardColumns = [];
    for (let i = 0; i < this.columnNumber; i++) {
      this.cardColumns.push([]);
    }
    for (let i = 0; i < this.cardPlaceHolders.length; i++) {
      const columnIndex = i % this.columnNumber;
      this.cardColumns[columnIndex].push(this.cardPlaceHolders[i]);
    }
  }
}
