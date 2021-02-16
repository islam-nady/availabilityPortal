import { TestBed } from '@angular/core/testing';

import { SammuryService } from './sammury.service';

describe('SammuryService', () => {
  let service: SammuryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SammuryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
