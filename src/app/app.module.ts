import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';   /* App routings */
import { ChartsModule } from 'ng2-charts';
import { CKEditorModule } from 'ckeditor4-angular';
import { NgxWheelModule } from 'ngx-wheel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

import { AuthGuard } from './auth.guard';    /* Auth Service */
import { WheelsService } from './services/wheels.service';    /* Auth Service */
import { Configuration } from './app.configuration';
/* All components */
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { Page404Component } from './page404/page404.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { ProfileSidebarComponent } from './profile/profile-sidebar/profile-sidebar.component';
import { BillingdetailsComponent } from './profile/billingdetails/billingdetails.component';
import { ProfileTopbarComponent } from './profile/profile-topbar/profile-topbar.component';
import { PaymentHistoryComponent } from './profile/payment-history/payment-history.component';
import { WheelsComponent } from './profile/wheels/wheels.component';
import { AddnewWheelsComponent } from './profile/wheels/addnew-wheels/addnew-wheels.component';
import { FooterComponent } from './footer/footer.component';
import { SubscriptionsComponent } from './profile/subscriptions/subscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    Page404Component,
    ChangePasswordComponent,
    ProfileSidebarComponent,
    BillingdetailsComponent,
    ProfileTopbarComponent,
    PaymentHistoryComponent,
    WheelsComponent,
    AddnewWheelsComponent,
    FooterComponent,
    SubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	HttpModule,
	ChartsModule,
	CKEditorModule,
	NgxWheelModule,
	FormsModule,
	ReactiveFormsModule,
	CommonModule,
	BrowserAnimationsModule,
	ToastrModule.forRoot()
  ],
  providers: [AuthGuard,Configuration,WheelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
