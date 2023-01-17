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
  
  addUser(objAdd :any){
    return this.http.post('https://jsonplaceholder.typicode.com/users',objAdd)
  }

  deleteUser(id :any){
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id);
  }

  updateUser(id :any,objAdd:any){
    return this.http.put('https://jsonplaceholder.typicode.com/users/' + id,objAdd);
  }
  
}
