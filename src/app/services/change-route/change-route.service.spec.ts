import { TestBed } from '@angular/core/testing';

import { ChangeRouteService } from './change-route.service';

describe('ChangeRouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeRouteService = TestBed.get(ChangeRouteService);
    expect(service).toBeTruthy();
  });
});
