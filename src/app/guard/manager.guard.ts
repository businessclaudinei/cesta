import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class ManagerGuard implements CanActivate {
  canActivate():boolean{
    const user = localStorage.get('user');

    return user.type=='manager';
  }
  
}
