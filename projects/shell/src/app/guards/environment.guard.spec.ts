import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { environmentGuard } from './environment.guard';

describe('environmentGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => TestBed.runInInjectionContext(
    () => environmentGuard(...guardParameters),
  );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
