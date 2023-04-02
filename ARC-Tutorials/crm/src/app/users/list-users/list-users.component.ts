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
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12]

  constructor(private contactsService:ContactsService) { }

  // ngOnInit(): void {
  //   this.contactsService.getusers().subscribe(data =>{
  //     this.userName$ = data;  //for mat card 
  //     this.dataSource = data; //for table
  //   })
 // }

 ngOnInit(): void {
  this.fetchPosts();
}
fetchPosts(): void {
  this.contactsService.getusers().subscribe(
    (response) => {
      this.userName$ = response;
      this.dataSource = response;
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
}

onTableDataChange(event: any) {
  this.page = event;
  this.fetchPosts();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.fetchPosts();
}

}
