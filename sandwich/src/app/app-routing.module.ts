import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageComponent } from './userpage/page/page.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MytripsComponent } from './userpage/mytrips/mytrips.component';
import { TrippageComponent } from './trippage/trippage.component';

export const routes: Routes = [
  {
    path: ' ', 
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'register', 
    component: RegisterComponent 
  },
  { path: 'page', 
    component: PageComponent 
  },
  { path: 'reviews', 
    component: ReviewsComponent 
  },
  { path: 'mytrips', 
  component: MytripsComponent 
  },
  { path: 'trippage', 
  component: TrippageComponent 
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ]
})
export class AppRoutingModule { }
