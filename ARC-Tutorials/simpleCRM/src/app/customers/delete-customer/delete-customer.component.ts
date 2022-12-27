import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {

  }
  deleteUser(){
    this.usersService.deleteUser(1).subscribe(data=>{
      console.log(data);
    },err => {
      console.error("Unable to Post ur data - "+err);    
    })
  }
}
