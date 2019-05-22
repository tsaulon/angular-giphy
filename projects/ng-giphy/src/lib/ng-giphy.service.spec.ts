import { TestBed } from '@angular/core/testing';

import { NgGiphyService } from './ng-giphy.service';

describe('NgGiphyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgGiphyService = TestBed.get(NgGiphyService);
    expect(service).toBeTruthy();
  });
});
