import { CanActivateFn, Router } from '@angular/router';

//const router = new Router();
export const authguardGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  if(token)
  {    
    return true;
  }
  else return false;  
};
