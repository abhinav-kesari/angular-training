import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  {
    path: 'loans',
    component: LoansComponent,
  },
  {
    path: 'add',
    component: AddLoansComponent,
  },
  {
    path: 'loan-type',
    component: LoanTypesComponent,
  },
  {
    path: 'loan-type',
    component: LoanTypesComponent,
    outlet : 'addLoan'
  },
  {
    path: 'loan-type',
    component: LoanTypesComponent,
    outlet : 'editLoan'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
