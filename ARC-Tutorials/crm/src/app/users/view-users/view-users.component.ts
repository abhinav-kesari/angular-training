import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactsService } from "../contacts.service";

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  constacts$ : any;
  users : any;
  userstatus: any;
  userName$ : any;
  userPromise: any;
  adminRole : boolean =true;
  isRole : boolean = true;

  constructor() { }

  ngOnInit(): void {


    //Example1
    this.users = ['Ram','Shiva','Abhinav'];
    this.constacts$ = of(this.users);
    console.log(this.constacts$);

    //Example2
    new Observable(observer => {

      setTimeout(() => {
        observer.next('Started...')
      }, 2000);

      setTimeout(() => {
        observer.next('pending...')
      }, 4000);

      setTimeout(() => {
        observer.next('Completed...')
      }, 6000);
    }).subscribe(data =>{
      this.userstatus = data;
    });

    //Example3
    // this.contactsService.getusers().subscribe(data =>{
    //   this.userName$ = data;
    // })

    // this.contactsService.viewUsers().toPromise()
    // .then( res =>{
    //   this.userPromise= res;
    // })
    // .catch(()=>{
    //   console.error();
    // })
    // .finally(()=>{
    //   console.log("Saved data!!")
    // })
    
  }

}
