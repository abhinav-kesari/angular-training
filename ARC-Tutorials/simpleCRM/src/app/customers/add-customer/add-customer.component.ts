import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  isUserAdded : boolean = false;
  firstname : string ='';
  terms : boolean = false;
  customerType : string = '';
  addText : string = '';

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    
    
  }
  
  
  addCustomer(formValue: NgForm){
   // console.log(formValue.value); 
    
    const postBody = {
      title : formValue.value.firstname,
      body : formValue.value.addText
    };
   // console.log(postBody);
    
    this.usersService.addusers(postBody).subscribe(data =>{
      this.isUserAdded = true;
    },err => {
      console.error("Unable to Post ur data - "+err);
      
    })
   
  
  }

  resetForm(formValue : NgForm){
    // formValue.reset();
    formValue.resetForm();

  }
  setFormValue(formValue : NgForm){
    let userDetails = {
      firstname : 'Arc',
      terms : true,
      customerType : '2',
      addText : 'This is to set values in Form'
    }

    formValue.setValue(userDetails);  
  }
  

}
