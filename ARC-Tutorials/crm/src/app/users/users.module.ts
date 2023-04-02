import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";
import {MatTableModule} from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';


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
    MatCardModule,
    RouterModule,
    MatInputModule ,
    MatButtonModule ,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule,
    NgxPaginationModule
  ],exports:[ListUsersComponent],
  providers:[
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}
  ]
})
export class UsersModule { }
