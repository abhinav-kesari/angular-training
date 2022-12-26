import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

interface User {
  name : string;
  email  : string;
  phoneno : Number;

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User>{

    const header =  new HttpHeaders({
      'content-type': 'application/json' ,
      'authenticationToken' : '12345'

    });

    const params1 = new HttpParams()
    .set('pageNum','10')
    .set('pageSize','100'); 

    const userData1 = this.http.get<User>("https://jsonplaceholder.typicode.com/users",{headers :header,params:params1});
    return userData1;

    /* const userData = [
      { userId : 10 , useName: 'Abhinav'},
      { userId : 20 , useName: 'Ankur'}
    ]
    return userData; */
  }
}
