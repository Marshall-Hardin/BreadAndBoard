import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
>>>>>>> 43a5b49d616e5c080c8af80e760e231a6163179a

import { AppComponent } from "./AppComponent";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxPopper } from 'angular-popper';
import { RegisterComponent } from './register/register.component';
import { AccountDetailsComponent } from './userpage/account-details/account-details.component';
import { TriprowComponent } from './userpage/triprow/triprow.component';
import { TripPlannerComponent } from './tripplanner/trip-planner/trip-planner.component';
import { DestinationComponent } from './tripplanner/destination/destination.component'

import { PageComponent } from './userpage/page/page.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { MytripsComponent } from './userpage/mytrips/mytrips.component';
import { TrippageComponent } from './trippage/trippage.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'page', component: PageComponent },
  { path: 'mytrips', component: MytripsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ReviewsComponent,
    RegisterComponent,
    MytripsComponent,
    AccountDetailsComponent,
    TriprowComponent,
    TripPlannerComponent,
    DestinationComponent
  ],
  imports: [
    GooglePlaceModule,
    PageComponent,
    Navbar2Component,
    TrippageComponent,
    BrowserModule,
<<<<<<< HEAD
    HttpClientModule,
    // NgxPopper,
    AppRoutingModule,
=======
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPopper,
>>>>>>> 43a5b49d616e5c080c8af80e760e231a6163179a
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBj773FOJ6yJsOyLx5js8e_WOYePNVrvdQ', libraries: ["places"]})
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
