import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate():boolean{
    const login = localStorage.getItem('login');
console.log('auth');
    return login != null;
  }
  
}
