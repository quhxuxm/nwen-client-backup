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
  _cardPlaceHolders: CardDataPlaceHolder<any>[];
  _columnNumber: number;
  _cardPlaceHolderColumns: CardDataPlaceHolder<any>[][];

  constructor(private breakpointObserver: BreakpointObserver) {
    this._cardPlaceHolderColumns = [];
    this.maxColumnNumber = 4;
  }

  ngOnInit() {
    if (this.maxColumnNumber > 4 || this.maxColumnNumber <= 0) {
      this.maxColumnNumber = 4;
    }
    this._columnNumber = this.maxColumnNumber;
    if (this._cardPlaceHolders.length < this._columnNumber) {
      this._columnNumber = this._cardPlaceHolders.length;
      this.BREAKPOINT_COLUMN_NUMBER.forEach((v, k, m) => {
        this.breakpointObserver.observe(k)
          .subscribe(
            () => {
              if (this.breakpointObserver.isMatched(k)) {
                this._columnNumber = v;
                if (this._columnNumber > this.maxColumnNumber) {
                  this._columnNumber = this.maxColumnNumber;
                }
                if (this._columnNumber > this._cardPlaceHolders.length) {
                  this._columnNumber = this._cardPlaceHolders.length;
                }
                this.refreshCardColumns();
              }
            }
          );
      });
    }
    this.refreshCardColumns();
  }

  private refreshCardColumns(): void {
    this._cardPlaceHolderColumns = [];
    for (let i = 0; i < this._columnNumber; i++) {
      this._cardPlaceHolderColumns.push([]);
    }
    for (let i = 0; i < this._cardPlaceHolders.length; i++) {
      const columnIndex = i % this._columnNumber;
      this._cardPlaceHolderColumns[columnIndex].push(this._cardPlaceHolders[i]);
    }
  }
}
