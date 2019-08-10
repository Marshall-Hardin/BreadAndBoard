import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ReviewsComponent } from './reviews/reviews.component'
import { NavbarComponent } from './navbar/navbar.component';
import { NgxPopper } from 'angular-popper';
import { RegisterComponent } from './register/register.component';
import { AccountDetailsComponent } from './userpage/account-details/account-details.component';
import { TriprowComponent } from './userpage/triprow/triprow.component';
import { TripPlannerComponent } from './tripplanner/trip-planner/trip-planner.component';
import { DestinationComponent } from './tripplanner/destination/destination.component'


const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ReviewsComponent,
    RegisterComponent,
    AccountDetailsComponent,
    TriprowComponent,
    TripPlannerComponent,
    DestinationComponent
  ],
  imports: [
    GooglePlaceModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPopper,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBj773FOJ6yJsOyLx5js8e_WOYePNVrvdQ', libraries: ["places"]})
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
