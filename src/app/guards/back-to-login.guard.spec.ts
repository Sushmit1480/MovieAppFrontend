import { TestBed } from '@angular/core/testing';

import { BackToLoginGuard } from './back-to-login.guard';

describe('BackToLoginGuard', () => {
  let guard: BackToLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BackToLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
