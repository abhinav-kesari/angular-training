import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getusers():Observable <object>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  viewUsers(id : string):Observable <object>{
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);         
  }


}
