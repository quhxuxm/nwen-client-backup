export class SearchArticleResponseRecordContent {
  id: string;
  publish: boolean;
}

export class SearchArticleResponseRecordPageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
}

export class SearchArticleResponseRecord {
  content: SearchArticleResponseRecordContent[];
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  pageable: SearchArticleResponseRecordPageable;
}

export class SearchArticleResponsePayload {
  records: SearchArticleResponseRecord;
}
