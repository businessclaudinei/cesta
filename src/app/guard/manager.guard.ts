import { Login } from './../models/login.model';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class ManagerGuard implements CanActivate {
  canActivate():boolean{
    const login:Login = JSON.parse(localStorage.getItem('login'));

    return login.roles.indexOf('edit') !== -1;
  }
  
}
