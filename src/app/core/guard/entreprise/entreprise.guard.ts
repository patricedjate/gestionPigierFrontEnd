import { CanActivateFn } from '@angular/router';

export const entrepriseGuard: CanActivateFn = (route, state) => {
  return true;
};
