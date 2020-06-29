import { TestBed } from '@angular/core/testing';

import { Post6Service } from './post6.service';

describe('Post6Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Post6Service = TestBed.get(Post6Service);
    expect(service).toBeTruthy();
  });
});
