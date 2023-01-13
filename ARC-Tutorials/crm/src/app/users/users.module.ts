import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUsersComponent,
    AddUserComponent,
    DeleteUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule
  ],exports:[ListUsersComponent]
})
export class UsersModule { }
