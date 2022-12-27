import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: 'edit', component: EditCustomersComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
