import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  firstname : string ='';
  terms : boolean = false;
  customerType : string = '';
  addText : string = '';

  constructor() { }

  ngOnInit(): void {
     

  }
  

  addCustomer(formValue: NgForm){
    console.log(formValue.value); 
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
