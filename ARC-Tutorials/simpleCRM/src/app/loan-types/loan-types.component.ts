import { ThisReceiver } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

    /* this.addLoanTypesForm.get('loanName')?.valueChanges.subscribe((data) =>{
      console.log(data);
    } ) */
  }
  


  

  ngOnInit(): void {
 
    /* let users = new FormArray([
      new FormControl('ARC'),
      new FormControl('Tutorials')
    ]) */

    /* console.log(users);
    console.log(users.value); */

    /* this.addLoanTypesForm.get('loanName')?.valueChanges.subscribe(data=>{
      console.log(data);
    }) */
/* 
    this.addLoanTypesForm.get('loanName')?.valueChanges.pipe(map(data =>{
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

      ])) ,
      'loanDetails2': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(22)

      ])) ,
      /* 'users' : new FormArray([
        new FormControl('ARC'),
        new FormControl('Tutorials')
      ]) */

      'users' : new FormArray([
        this.fb.group({
            'name' : new FormControl(''),
            'age'  : new FormControl(''),
            'dep'  : new FormControl('')

        })
      ])

        

    })
   //  this.addLoanTypesForm.setValue(this.userData);
  // this.addLoanTypesForm.patchValue(this.userData);

  this.addLoanTypesForm.statusChanges.subscribe((data) =>{
    console.log(data);
  } )

  this.addLoanTypesForm.get('loanName')?.statusChanges.subscribe((data) =>{
    console.log(data);
  } )

 

 



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

  get users():FormArray{
    return this.addLoanTypesForm.get('users') as FormArray;
  }

  // addForm(){
  //   let users = this.addLoanTypesForm.get('users') as FormArray;
  //   let newusers = this.fb.group({
  //     'name' : '',
  //      'age' : '',
  //      'dep' : ''
  //   })

  //  // newusers.push(users);
  //    console.log(this.addLoanTypesForm.get('users') as FormArray);
  // }
}


