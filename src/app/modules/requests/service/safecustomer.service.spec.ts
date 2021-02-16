import { TestBed } from '@angular/core/testing';

import { SafecustomerService } from './safecustomer.service';

describe('SafecustomerService', () => {
  let service: SafecustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafecustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
