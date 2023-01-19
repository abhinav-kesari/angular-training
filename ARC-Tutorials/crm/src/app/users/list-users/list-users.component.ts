import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

export interface User {
  name: string;
  id: number;
  username: string;
  email: string;
}

const ELEMENT_DATA: User[] = [];



@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email','actions'];
  dataSource = ELEMENT_DATA;
  

  userName$: any;
 // userName$ : User[] = [];

  constructor(private contactsService:ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getusers().subscribe(data =>{
      this.userName$ = data;  //for mat card 
      this.dataSource = data; //for table
    })

  }

}
