import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  userList$!: any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUserList().subscribe(data =>{
      this.userList$ = data;
      console.log(data);
    })
  }

}
