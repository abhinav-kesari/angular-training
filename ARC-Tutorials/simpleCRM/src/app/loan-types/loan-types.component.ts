import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {

  addLoanTypesForm! : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

   /*  this.addLoanTypesForm = new FormGroup({
      'loanName' : new FormControl(),
      'loanDetails': new FormControl() 
    }) */
    this.addLoanTypesForm = this.fb.group({
      'loanName' : new FormControl('aBHIBAV'),
      'loanDetails': new FormControl('THIS IS TO SET THE VALUES') 
    })
   //  this.addLoanTypesForm.setValue(this.userData);
   this.addLoanTypesForm.patchValue(this.userData);
  }

  userData = {
    'loanName' : 'Abhinav',
    'loanDetails' : ' object method!'
  }
  addLoanType(){
    console.log(this.addLoanTypesForm.value);
  }


}
