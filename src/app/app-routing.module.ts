import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
/* Components Include */
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
{path:'', component:LandingComponent},
{path:'login', component:SigninComponent},
{path:'signup', component:SignupComponent},
{path:'resetpassword', component:ForgotPasswordComponent},
{path:'profile', component:ProfileComponent, canActivate: [AuthGuard]},
{ path: '**',  component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
