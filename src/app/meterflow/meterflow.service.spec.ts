import { TestBed } from '@angular/core/testing';

import { MeterflowService } from './meterflow.service';

describe('MeterflowService', () => {
  let service: MeterflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeterflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
