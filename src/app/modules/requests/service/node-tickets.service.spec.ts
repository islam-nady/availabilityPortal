import { TestBed } from '@angular/core/testing';

import { NodeTicketsService } from './node-tickets.service';

describe('NodeTicketsService', () => {
  let service: NodeTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
