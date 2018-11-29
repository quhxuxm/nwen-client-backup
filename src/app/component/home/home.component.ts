import {Component, OnInit} from '@angular/core';
import {ExecutorService} from '../../service/executor.service';
import {Card} from '../../vo/card';

@Component({
  selector: 'nwen-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recentCreatedArticles: Card[];
  recentUpdatedAnthologies: Card[];
  properlyLikeArticles: Card[];
  properlyLikeAnthologies: Card[];
  hotArticles: Card[];

  constructor(private executorService: ExecutorService) {
    this.recentCreatedArticles = [];
    this.recentUpdatedAnthologies = [];
    this.properlyLikeAnthologies = [];
    this.properlyLikeArticles = [];
    this.hotArticles = [];
  }

  ngOnInit() {
    const searchRecentCreateArticlesRequest=
    this.executorService.exec('/api/article/search', null,() => {
    });
    for (let i = 0; i < 10; i++) {
      const card = new Card();
      card.title = '文章标题Card title ' + i;
      card.subTitle = '文章作者Card subtitle ' + i;
      card.content = '文章内容 文章内容 文章内容 文章内容 C ard content Card contentCard contentCard contentCard contentCard contentCard contentCard ' +
        'Card contentCard contentCard contentCard contentCard contentCard contentCard contentCard contentCard ' +
        'contentCard contentCard contentCard contentcontentCard content' + i;
      card.coverImageUrl = '/assets/test.jpg';
      this.cards[i] = card;
    }
  }
}
