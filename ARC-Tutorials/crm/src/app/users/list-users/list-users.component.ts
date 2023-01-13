import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  userName$: any;

  constructor(private contactsService:ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getusers().subscribe(data =>{
      this.userName$ = data;
    })

  }

}
