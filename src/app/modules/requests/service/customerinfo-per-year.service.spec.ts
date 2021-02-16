import { TestBed } from '@angular/core/testing';

import { CustomerinfoPerYearService } from './customerinfo-per-year.service';

describe('CustomerinfoPerYearService', () => {
  let service: CustomerinfoPerYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerinfoPerYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
