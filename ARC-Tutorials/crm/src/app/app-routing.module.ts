import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRolesComponent } from './roles/list-roles/list-roles.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';

const routes: Routes = [
  {
    path:'' , component: ListUsersComponent
  },
  {
    path:'users' , component: ListUsersComponent
  },
  {
    path:'roles' , component: ListRolesComponent
  },
  {
    path:'view-users' , component: ViewUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
