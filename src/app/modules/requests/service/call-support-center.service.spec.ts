import { TestBed } from '@angular/core/testing';

import { CallSupportCenterService } from './call-support-center.service';

describe('CallSupportCenterService', () => {
  let service: CallSupportCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallSupportCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
