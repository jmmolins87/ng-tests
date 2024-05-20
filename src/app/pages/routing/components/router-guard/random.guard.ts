import { CanActivateFn } from '@angular/router';

export const randomGuard: CanActivateFn = () => {
  let random = Math.random();
  console.log('Random guard number', random);
  if( random > 0.4 ) {
    return true;
  } else {
    return false;
  }
};
