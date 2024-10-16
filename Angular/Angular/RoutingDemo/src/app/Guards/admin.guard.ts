import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const adminGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  console.log(token);
  if(token){
    router.navigate(['dashboard']);
    return true;
  }else
  {
    router.navigate(['login'])
    return false;
  }
};
