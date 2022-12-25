import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
  // return this.http.get("https://jsonplaceholder.typicode.com/users");
    const user1 = [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 2,
        "id": 2,
        "title": "delectus aut autem",
        "completed": true
      }
    ]
     return user1
  }

}
