import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
   private url:string="https://randomuser.me/api"
  constructor( private http:HttpClient) { }

  getData(){
    return this.http.get(this.url)
  }
}
