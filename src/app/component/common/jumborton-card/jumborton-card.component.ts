import {Component, Input, OnInit} from '@angular/core';
import {CardUiModel} from '../../../vo/card-ui-model';

/**
 * Give a card object, it will draw the card as a jumborton.
 */
@Component({
  selector: 'nwen-jumborton-card',
  templateUrl: './jumborton-card.component.html',
  styleUrls: ['./jumborton-card.component.scss']
})
export class JumbortonCardComponent implements OnInit {
  @Input()
  card: CardUiModel;
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
