import { CanActivateFn } from '@angular/router';

export const superviseurGuard: CanActivateFn = (route, state) => {
  return true;
};
