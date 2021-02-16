import { TestBed } from '@angular/core/testing';

import { VaiolateService } from './vaiolate.service';

describe('VaiolateService', () => {
  let service: VaiolateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaiolateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
