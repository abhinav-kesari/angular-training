import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ViewUserComponent } from './users/view-user/view-user.component';

const routes: Routes = [
  {path:'add' , component:AddUserComponent},
  {path:'edit/:id' , component:EditUserComponent},
  {path:'delete/:id' , component:DeleteUserComponent},
  {path:'list' , component:ListUsersComponent},
  {path:'view/:id' , component:ViewUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
