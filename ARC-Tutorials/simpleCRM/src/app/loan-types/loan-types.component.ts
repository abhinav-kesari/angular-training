import { ThisReceiver } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { data } from 'cypress/types/jquery';
import { elementAt, map } from 'rxjs';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {

  addLoanTypesForm! : FormGroup;

  constructor(private fb : FormBuilder) { }
  trackLoanName() {
    //console.log("ON CHANGE!!");
    /* this.addLoanTypesForm.valueChanges.subscribe((data) =>{
      console.log(data);
    } ) */

    this.addLoanTypesForm.get('loanName')?.valueChanges.subscribe((data) =>{
      console.log(data);
    } )
  }
 

  

  ngOnInit(): void {
    
    /* this.addLoanTypesForm.get('loanName')?.valueChanges.subscribe(data=>{
      console.log(data);
    }) */

   /*  this.addLoanTypesForm.get('loanName')?.valueChanges.pipe(map(data =>{
      console.log(data);
    })) */

   /*  this.addLoanTypesForm = new FormGroup({
      'loanName' : new FormControl(),
      'loanDetails': new FormControl() 
    }) */
    this.addLoanTypesForm = this.fb.group({
      'loanName' : new FormControl('',[
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8), 
//          Validators.pattern('^[a-zA-Z ]*$')
      ]
      ),
      'loanDetails': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(22)

      ])) 
    })
   //  this.addLoanTypesForm.setValue(this.userData);
  // this.addLoanTypesForm.patchValue(this.userData);
} 

  /* userData = {
    'loanName' : 'Abhinav',
    'loanDetails' : ' object method!'
  } */

addLoanType(){
    console.log(this.addLoanTypesForm.valid);
    console.log(this.addLoanTypesForm.invalid);
    console.log(this.addLoanTypesForm.pending);
    console.log(this.addLoanTypesForm.pristine);
    console.log(this.addLoanTypesForm.dirty);
    console.log(this.addLoanTypesForm.touched);
    console.log(this.addLoanTypesForm.untouched);
    console.log(this.addLoanTypesForm.value);
    // console.log(this.addLoanTypesForm.get('loanDetails')?.value);

  //  this.addLoanTypesForm.valueChanges.subscribe(data=>(console.log(data)))

  }

  resetForm(){
    this.addLoanTypesForm.reset();
  }
}

   
