export class SearchArticleRequestCondition {
  type: string;
  params: {
    [key: string]: string;
  };
  asc: boolean;
  sortPropertyNames: string[];

  constructor() {
    this.sortPropertyNames = [];
    this.params = {};
  }
}

export class SearchArticleRequestPayload {
  pageIndex: number;
  pageSize: number;
  condition: SearchArticleRequestCondition;

  constructor() {
    this.condition = new SearchArticleRequestCondition();
  }
}
