import { TestBed } from '@angular/core/testing';

import { PhonesIdCompareService } from './phones-id-compare.service';

describe('PhonesIdCompareService', () => {
  let service: PhonesIdCompareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonesIdCompareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
