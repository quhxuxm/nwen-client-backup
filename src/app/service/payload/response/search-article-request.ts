export class SearchArticleRequest {
  pageIndex: number;
  pageSize: number;
  condition: {
    type: string;
  };
}
