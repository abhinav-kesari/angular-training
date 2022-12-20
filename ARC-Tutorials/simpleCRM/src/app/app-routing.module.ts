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
import { AdminComponent } from './admin/admin.component';
import { SuperAdminGuard } from './super-admin.guard';
import { SuperAccessGuard } from './super-access.guard';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { PreferencesCheckGuard } from './preferences-check.guard';
import { UnsavedGuard } from './unsaved.guard';
import { ResolverGuard } from './resolver.guard';
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
   },
   {
      path : 'admin',
      canActivate : [SuperAdminGuard],
      children :[
          {
            path : '',
            component : AdminComponent
          },
          { 
             path : '',
             canActivateChild: [SuperAccessGuard],  
             children: [
                  {path : 'manage',component : AdminManageComponent},
                  {path : 'edit',  component : AdminEditComponent},
                  {path : 'delete',component : AdminDeleteComponent}
             ]               
          }
                  
          
       ]
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
    component : SearchComponent,
    canDeactivate : [UnsavedGuard]
   },
   {
         path : 'leads',
         component: LeadsGridComponent,
         resolve: {
          data : ResolverGuard
         }
   },

    { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },

    { path: 'preferences', 
      canLoad : [PreferencesCheckGuard],
      loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule) 
    },

    { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },

    {
      path : 'loan-types',
      component : LoanTypesComponent
    },
   




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
