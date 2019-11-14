import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';   /* App routings */

import { AuthGuard } from './auth.guard';    /* Auth Service */
import { Configuration } from './app.configuration';
/* All components */
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	HttpModule
  ],
  providers: [AuthGuard,Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
