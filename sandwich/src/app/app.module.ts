import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BanComponent } from './userpage/ban/ban.component';
import { EditorschoiceComponent } from './userpage/editorschoice/editorschoice.component';
import { ViewallbansComponent } from './userpage/viewallbans/viewallbans.component';
=======
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { AccountDetailsComponent } from './userpage/account-details/account-details.component';
import { MyreviewsComponent } from './myreviews/myreviews.component';
import { TriprowComponent } from './userpage/triprow/triprow.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];
>>>>>>> ab5d1c70cfa372ff9805b56d0f9122cb44692bf1

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    BanComponent,
    EditorschoiceComponent,
    ViewallbansComponent
=======
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    AccountDetailsComponent,
    MyreviewsComponent,
    TriprowComponent
>>>>>>> ab5d1c70cfa372ff9805b56d0f9122cb44692bf1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    RouterModule.forRoot(appRoutes)
>>>>>>> ab5d1c70cfa372ff9805b56d0f9122cb44692bf1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
