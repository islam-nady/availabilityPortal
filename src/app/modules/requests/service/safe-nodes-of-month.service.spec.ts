import { TestBed } from '@angular/core/testing';

import { SafeNodesOfMonthService } from './safe-nodes-of-month.service';

describe('SafeNodesOfMonthService', () => {
  let service: SafeNodesOfMonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafeNodesOfMonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
