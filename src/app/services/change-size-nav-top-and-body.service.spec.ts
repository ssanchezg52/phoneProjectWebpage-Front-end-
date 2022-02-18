import { TestBed } from '@angular/core/testing';

import { ChangeSizeNavTopService } from './change-size-nav-top-and-body.service.service';

describe('ChangeSizeNavTopService', () => {
  let service: ChangeSizeNavTopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeSizeNavTopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
