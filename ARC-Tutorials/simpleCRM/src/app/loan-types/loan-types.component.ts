import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {

  addLoanTypesForm! : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addLoanTypesForm = new FormGroup({
      'loanName' : new FormControl(),
      'loanDetails': new FormControl() 
    })
  }
  addLoanType(){
    console.log(this.addLoanTypesForm?.value);
  }


}
