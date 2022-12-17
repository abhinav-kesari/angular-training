import { TestBed } from '@angular/core/testing';

import { SuperAccessGuard } from './super-access.guard';

describe('SuperAccessGuard', () => {
  let guard: SuperAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuperAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
