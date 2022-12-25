import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  
  cName : string = 'Arc tutorials';
  taxVal : Number = 2000;
  user = {};
  userData = {};

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.userData =  this.userService.getUsers();
  }

  users(event: any){
    console.log(event);
    this.user = event;
  }




}
