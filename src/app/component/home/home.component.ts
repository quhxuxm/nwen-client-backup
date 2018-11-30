import {Component, OnInit} from '@angular/core';
import {GlobalConstant} from '../../constant';
import {ExecutorRequest} from '../../service/executor-request';
import {SearchArticleRequestPayload} from '../../service/payload/request/search-article-request-payload';
import {ViewArticleSummaryRequestPayload} from '../../service/payload/request/view-article-summary-request-payload';
import {SearchArticleService} from '../../service/search-article.service';
import {CardDataPlaceHolder} from '../../vo/card-data-place-holder';

@Component({
  selector: 'nwen-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recentCreatedArticles: CardDataPlaceHolder<ViewArticleSummaryRequestPayload>[];

  constructor(private searchArticleService: SearchArticleService) {
    this.recentCreatedArticles = [];
  }

  ngOnInit() {
    const searchRecentCreateArticlesRequest = new SearchArticleRequestPayload();
    searchRecentCreateArticlesRequest.pageSize = 4;
    searchRecentCreateArticlesRequest.pageIndex = 0;
    searchRecentCreateArticlesRequest.condition.asc = false;
    searchRecentCreateArticlesRequest.condition.type = 'RECENT_CREATED';
    const currentDate = new Date();
    searchRecentCreateArticlesRequest.condition.params = {'relativeDate': currentDate.getTime().toString(10)};
    searchRecentCreateArticlesRequest.condition.sortPropertyNames = ['createDate'];
    this.searchArticleService.search(searchRecentCreateArticlesRequest, executorResponse => {
      const payload = executorResponse.payload;
      const articleInfos = payload.records.content;
      articleInfos.forEach(value => {
        const cardPlaceHolder = new CardDataPlaceHolder<ViewArticleSummaryRequestPayload>();
        cardPlaceHolder.url = '/api/article/view/summary';
        cardPlaceHolder.request = new ExecutorRequest<ViewArticleSummaryRequestPayload>();
        cardPlaceHolder.request.payload = new ViewArticleSummaryRequestPayload();
        cardPlaceHolder.request.payload.articleId = value.id;
        cardPlaceHolder.fieldsMapping = GlobalConstant.Common.viewArticleSummaryResponsePayloadFieldMapping;
        this.recentCreatedArticles[this.recentCreatedArticles.length] = cardPlaceHolder;
      });
    });
    // for (let i = 0; i < 10; i++) {
    //   const card = new CardUiModel();
    //   card.title = '文章标题Card title ' + i;
    //   card.subTitle = '文章作者Card subtitle ' + i;
    //   card.content = '文章内容 文章内容 文章内容 文章内容 C ard content CardUiModel contentCard
    //   contentCard contentCard contentCard contentCard contentCard ' +
    //     'CardUiModel contentCard contentCard contentCard contentCard contentCard contentCard contentCard contentCard ' +
    //     'contentCard contentCard contentCard contentcontentCard content' + i;
    //   card.coverImageUrl = '/assets/test.jpg';
    //   this.recentCreatedArticles.push(card);
    // }
  }
}
