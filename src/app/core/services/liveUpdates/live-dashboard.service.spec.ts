import { TestBed } from '@angular/core/testing';

import { LiveDashboardService } from './live-dashboard.service';

describe('LiveDashboardService', () => {
  let service: LiveDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
