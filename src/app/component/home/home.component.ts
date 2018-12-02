import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {GlobalConstant} from '../../constant';
import {ExecutorRequest} from '../../service/executor-request';
import {ViewArticleSummaryRequestPayload} from '../../service/payload/request/view-article-summary-request-payload';
import {SearchArticleService} from '../../service/search-article.service';
import {CardDataPlaceHolder} from '../../vo/card-data-place-holder';

@Component({
  selector: 'nwen-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recentCreatedArticles: Subject<CardDataPlaceHolder<ViewArticleSummaryRequestPayload>[]>;

  private static createArticleSummaryCardDataPlaceHolder(articleId: string): CardDataPlaceHolder<ViewArticleSummaryRequestPayload> {
    const cardPlaceHolder = new CardDataPlaceHolder<ViewArticleSummaryRequestPayload>();
    cardPlaceHolder.url = '/api/article/view/summary';
    cardPlaceHolder.request = new ExecutorRequest<ViewArticleSummaryRequestPayload>();
    cardPlaceHolder.request.payload = new ViewArticleSummaryRequestPayload();
    cardPlaceHolder.request.payload.articleId = articleId;
    cardPlaceHolder.fieldsMapping = GlobalConstant.Common.viewArticleSummaryResponsePayloadFieldMapping;
    return cardPlaceHolder;
  }

  constructor(private searchArticleService: SearchArticleService) {
    this.recentCreatedArticles = new Subject<CardDataPlaceHolder<ViewArticleSummaryRequestPayload>[]>();
  }

  ngOnInit() {
    const searchRecentCreateArticlesRequest = this.searchArticleService.createSearchRecentCreatedArticlesRequestPayload(0, 12, false);
    this.searchArticleService.search(searchRecentCreateArticlesRequest, executorResponse => {
      const payload = executorResponse.payload;
      const articleInfos = payload.records.content;
      const cardDataPlaceHolders: CardDataPlaceHolder<ViewArticleSummaryRequestPayload>[] = [];
      articleInfos.forEach(value => {
        cardDataPlaceHolders[cardDataPlaceHolders.length] = HomeComponent.createArticleSummaryCardDataPlaceHolder(value.id);
      });
      this.recentCreatedArticles.next(cardDataPlaceHolders);
    });
  }
}
