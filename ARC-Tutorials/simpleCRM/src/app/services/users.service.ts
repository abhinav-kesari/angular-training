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

  deleteUser(id: Number){
     return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id);
  }

  //Update Users
  updateUsers(){
    const putBody = {
      userId : 1,
      name : 'ARC Tutorials PUT oprations'
    }

    const headerPut =  new HttpHeaders({
      'authenticationToken' : '1234511'
    });

    const paramsPut = new HttpParams()
    .set('USEROLE','ADMIN');
    this.http.put('https://jsonplaceholder.typicode.com/users/1', putBody,{ headers: headerPut,params:paramsPut}).subscribe(data=>{
      console.log(data);
    },err =>{
      console.log("Unable to put req"+ err);
    });
  }

  //Post Method
  addusers(body: any): Observable<User>{
    
    // const postBody = {
    //   title : body.,
    //   body : body.userDetails
    // }
    
    const headerPost =  new HttpHeaders({
      'authenticationToken' : '1234511'
    });

    const paramsPost = new HttpParams()
    .set('USEROLE','ADMIN');
    

    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', body,{headers:headerPost,params:paramsPost})

  }

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
