import { TestBed } from '@angular/core/testing';

import { MultiSearch2Service } from './multi-search2.service';

describe('MultiSearch2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiSearch2Service = TestBed.get(MultiSearch2Service);
    expect(service).toBeTruthy();
  });
});
