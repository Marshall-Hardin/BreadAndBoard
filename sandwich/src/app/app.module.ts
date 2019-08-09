import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BanComponent } from './userpage/ban/ban.component';
import { EditorschoiceComponent } from './userpage/editorschoice/editorschoice.component';
import { ViewallbansComponent } from './userpage/viewallbans/viewallbans.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { AccountDetailsComponent } from './userpage/account-details/account-details.component';
import { TriprowComponent } from './userpage/triprow/triprow.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BanComponent,
    EditorschoiceComponent,
    ViewallbansComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    AccountDetailsComponent,
    TriprowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
