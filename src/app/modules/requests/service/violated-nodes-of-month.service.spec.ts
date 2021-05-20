import { TestBed } from '@angular/core/testing';

import { ViolatedNodesOfMonthService } from './violated-nodes-of-month.service';

describe('ViolatedNodesOfMonthService', () => {
  let service: ViolatedNodesOfMonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViolatedNodesOfMonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
