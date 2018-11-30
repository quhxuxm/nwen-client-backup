import {ExecutorRequest} from '../service/executor-request';

export class CardDataPlaceHolderFieldMapping {
  title = 'title';
  subTitle = 'subTitle';
  content = 'content';
  coverImageUrl = 'coverImageUrl';

  constructor(title?: string, subTitle?: string, content?: string, coverImageUrl?: string) {
    if (title) {
      this.title = title;
    }
    if (subTitle) {
      this.subTitle = subTitle;
    }
    if (content) {
      this.content = content;
    }
    if (coverImageUrl) {
      this.coverImageUrl = coverImageUrl;
    }
  }
}

export class CardDataPlaceHolder<RequestPayloadType> {
  private _url: string;
  private _request: ExecutorRequest<RequestPayloadType>;
  private _fieldsMapping: CardDataPlaceHolderFieldMapping;

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get request(): ExecutorRequest<RequestPayloadType> {
    return this._request;
  }

  set request(value: ExecutorRequest<RequestPayloadType>) {
    this._request = value;
  }

  get fieldsMapping(): CardDataPlaceHolderFieldMapping {
    return this._fieldsMapping;
  }

  set fieldsMapping(value: CardDataPlaceHolderFieldMapping) {
    this._fieldsMapping = value;
  }
}
