import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../app/services/users.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  
  

  users: any;
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
   // this.users = this.usersService.getUsers();
     this.usersService.getUsers().subscribe(data=>{
      this.users = data;
     }, (err) => {
      console.log("Error in User Get method"+ err);
     })
    
  }

}
