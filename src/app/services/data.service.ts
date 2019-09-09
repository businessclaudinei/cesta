import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url:string ='http://localhost:3000/'; 

  constructor(private http: HttpClient) { }

  getToken(email:string){
    return this.http.post(`${this.url}token/${email}`,{});
  }
}
