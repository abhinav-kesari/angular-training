import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListProfileComponent } from "./profile/list-profile/list-profile.component";
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProfileComponent,
    HighlightDirective,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
