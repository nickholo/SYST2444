import { TestBed } from '@angular/core/testing';

import { HologronService } from './hologron.service';

describe('HologronService', () => {
  let service: HologronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HologronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
