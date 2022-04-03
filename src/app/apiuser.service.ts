import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiuserService {

  constructor(private getuser:HttpClient) { }

  getListuser()
  {
    return this.getuser.get("https://jsonplaceholder.typicode.com/users");
   // return this.getuser.get("https://jsonplaceholder.typicode.com/comments");

  }


}
