import { TestBed } from '@angular/core/testing';

import { CountNodeService } from './count-node.service';

describe('CountNodeService', () => {
  let service: CountNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
