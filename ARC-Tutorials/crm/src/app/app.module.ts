import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from "../app/layout/layout.module";
import { UsersModule } from "../app/users/users.module";
import { RolesModule } from "../app/roles/roles.module";


import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { SearchComponent } from './search/search.component';
//import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from "ngx-pagination";


@NgModule({
  declarations: [
    AppComponent,
    ContentProjectionComponent,
    RxjsLearningComponent,
    SearchComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    RolesModule,
    MatSidenavModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxPaginationModule
  //  MatTableModule
  ],
  providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
