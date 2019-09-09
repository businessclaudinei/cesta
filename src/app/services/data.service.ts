import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url:string ='http://localhost:3000/'; 

  constructor(private http: HttpClient) { }

  getLoginInformation(userId:number){
    return this.http.get(`${this.url}${userId}`);
  }
}
