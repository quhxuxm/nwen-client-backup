import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../vo/card';

@Component({
  selector: 'nwen-reactive-card-container',
  templateUrl: './reactive-card-container.component.html',
  styleUrls: ['./reactive-card-container.component.scss']
})
export class ReactiveCardContainerComponent implements OnInit {
  private BREAKPOINT_COLUMN_NUMBER: Map<string[], number> = new Map<string[], number>([
    [[Breakpoints.XSmall], 1],
    [[Breakpoints.Small], 2],
    [[Breakpoints.Medium, Breakpoints.Large], 3],
    [[Breakpoints.XLarge], 4]
  ]);
  @Input()
  maxColumnNumber: number | null;
  @Input()
  cards: Card[];
  __columnNumber: number | null;
  __cardColumns: Card[][];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.cards = [];
    this.__cardColumns = [];
    this.maxColumnNumber = null;
  }

  ngOnInit() {
    if (!this.maxColumnNumber || this.maxColumnNumber > 4 || this.maxColumnNumber <= 0) {
      this.maxColumnNumber = 3;
    }
    this.__columnNumber = this.maxColumnNumber;
    if (this.cards.length < this.__columnNumber) {
      this.__columnNumber = this.cards.length;
    }
    this.BREAKPOINT_COLUMN_NUMBER.forEach((v, k, m) => {
      this.breakpointObserver.observe(k)
        .subscribe(
          () => {
            if (this.breakpointObserver.isMatched(k)) {
              this.__columnNumber = v;
              if (this.__columnNumber > this.maxColumnNumber) {
                this.__columnNumber = this.maxColumnNumber;
              }
              if (this.__columnNumber > this.cards.length) {
                this.__columnNumber = this.cards.length;
              }
              this.refreshCardColumns();
            }
          }
        );
    });
  }

  private refreshCardColumns(): void {
    this.__cardColumns = [];
    for (let i = 0; i < this.__columnNumber; i++) {
      this.__cardColumns.push([]);
    }
    for (let i = 0; i < this.cards.length; i++) {
      const columnIndex = i % this.__columnNumber;
      this.__cardColumns[columnIndex].push(this.cards[i]);
    }
  }
}
