import { TestBed } from '@angular/core/testing';

import { TripplannerService } from './tripplanner.service';

describe('TripplannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripplannerService = TestBed.get(TripplannerService);
    expect(service).toBeTruthy();
  });
});
