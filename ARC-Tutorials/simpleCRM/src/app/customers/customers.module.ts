import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule } from "@angular/forms";
import { EditCustomersComponent } from './edit-customers/edit-customers.component';


@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerComponent,
    EditCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule
  ]
})
export class CustomersModule { }
