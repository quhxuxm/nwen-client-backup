import { TestBed } from '@angular/core/testing';

import { SearchArticleService } from './search-article.service';

describe('SearchArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchArticleService = TestBed.get(SearchArticleService);
    expect(service).toBeTruthy();
  });
});
