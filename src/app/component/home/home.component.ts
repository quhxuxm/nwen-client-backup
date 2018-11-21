import {Component, OnInit} from '@angular/core';
import {Card} from '../../vo/card';

@Component({
  selector: 'nwen-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: Card[];

  constructor() {
    this.cards = [];
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      const card = new Card();
      card.title = 'Card title ' + i;
      card.subTitle = 'Card subtitle ' + i;
      card.content = 'Card content ' + i;
      this.cards[i] = card;
    }
  }
}
