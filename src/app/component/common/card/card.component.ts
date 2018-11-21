import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../vo/card';

@Component({
  selector: 'nwen-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  card: Card;
  @Input()
  showTitle: boolean;
  @Input()
  showSubTitle: boolean;
  @Input()
  showContent: boolean;
  @Input()
  showCoverImage: boolean;

  constructor() {
    this.showTitle = true;
    this.showSubTitle = true;
    this.showContent = true;
    this.showCoverImage = true;
  }

  ngOnInit() {
  }
}
