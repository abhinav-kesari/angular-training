import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './loans/loans.component';
import { RouterModule, Routes } from '@angular/router';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
// import { P1Component } from './p1/p1.component';
// import { P2Component } from './p2/p2.component';

const routes : Routes=[

    {
        path : 'product/:id' ,component : ProductComponent
    },
    {
      path : 'product/:id/photo/:photoId' ,component : ProductComponent
   },
  //  {
  //   path : 'clients' ,
  //   component : ClientsComponent,
  //   canActivate : [AuthGuard]
  //  }
  {
    path : 'clients' ,
    component : ClientsComponent,
    canActivate : [AdminGuard , AuthGuard]
   }








  //  {
  //   path : '',
  //   redirectTo: 'leads',
  //   pathMatch : 'full'
  //  },
  //  {
  //   path : 'leads',
  //   component: LeadsGridComponent
  //  }
   ,{
    path: 'search',
    component : SearchComponent
   },

    { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  
  




  // {
  //   path : 'product/1' ,component : P1Component
  // },
  // {
  //   path : 'product/2' ,component : P2Component
  // }


//   {
//     path : 'loans',
//     component : LoansComponent
//   },
//   {
//     path : 'loan-type',
//  //   component : LoanTypesComponent,
//     children : [
//         {
//            path : 'add-new-Loan',
//            redirectTo : 'addLoan'
//         },
//         {
//           path : 'addLoan',
//           component : AddLoansComponent
//        }
    
//   ]
//   }
{
  path : '**',
  component : PageNotFoundComponent
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
