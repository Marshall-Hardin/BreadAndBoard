import { TestBed } from '@angular/core/testing';

import { MytripsService } from './mytrips.service';

describe('MytripsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MytripsService = TestBed.get(MytripsService);
    expect(service).toBeTruthy();
  });
});
