import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.scss']
})
export class EditCustomersComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.updateUsers();
  }

updateUser(){
  this.usersService.updateUsers();
}
  

}
