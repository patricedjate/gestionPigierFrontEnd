import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { superviseurGuard } from './superviseur.guard';

describe('superviseurGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => superviseurGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
