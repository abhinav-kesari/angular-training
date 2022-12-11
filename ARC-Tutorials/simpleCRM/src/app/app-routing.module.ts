import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './loans/loans.component';
import { RouterModule, Routes } from '@angular/router';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';

const routes : Routes=[
  {
    path : 'loans',
    component : LoansComponent
  },
  {
    path : 'loan-type',
 //   component : LoanTypesComponent,
    children : [
        {
           path : 'add-new-Loan',
           redirectTo : 'addLoan'
        },
        {
          path : 'addLoan',
          component : AddLoansComponent
       }
    
  ]
  }
  

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
