import { TestBed } from '@angular/core/testing';

import { MpostService } from './mpost.service';

describe('MpostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MpostService = TestBed.get(MpostService);
    expect(service).toBeTruthy();
  });
});
