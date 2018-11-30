import {Injectable} from '@angular/core';
import {ExecutorRequest} from './executor-request';
import {
  ExecutorService, ExecutorServiceBusinessExceptionCallback, ExecutorServiceClientExceptionCallback, ExecutorServiceServerExceptionCallback,
  ExecutorServiceSuccessCallback
} from './executor.service';
import {SearchArticleRequestPayload} from './payload/request/search-article-request-payload';
import {SearchArticleResponsePayload} from './payload/response/search-article-response-payload';

@Injectable({
  providedIn: 'root'
})
export class SearchArticleService {
  constructor(private _executorService: ExecutorService) {
  }

  search(searchArticleRequestPayload: SearchArticleRequestPayload,
         successCallback: ExecutorServiceSuccessCallback<SearchArticleResponsePayload>,
         clientErrorCallback?: ExecutorServiceClientExceptionCallback,
         severErrorCallback?: ExecutorServiceServerExceptionCallback,
         businessErrorCallback?: ExecutorServiceBusinessExceptionCallback): void {
    const request = new ExecutorRequest<SearchArticleRequestPayload>();
    request.payload = searchArticleRequestPayload;
    this._executorService.exec<SearchArticleRequestPayload, SearchArticleResponsePayload>('/api/article/search', request,
      executorResponse => {
        successCallback(executorResponse);
      }, error => {
        if (clientErrorCallback) {
          clientErrorCallback(error);
        }
      }, payload => {
        if (severErrorCallback) {
          severErrorCallback(payload);
        }
      }, executorResponse => {
        if (businessErrorCallback) {
          businessErrorCallback(executorResponse);
        }
      });
  }
}
