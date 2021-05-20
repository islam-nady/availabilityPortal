import { TestBed } from '@angular/core/testing';

import { WarningNodesOfMonthService } from './warning-nodes-of-month.service';

describe('WarningNodesOfMonthService', () => {
  let service: WarningNodesOfMonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarningNodesOfMonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
