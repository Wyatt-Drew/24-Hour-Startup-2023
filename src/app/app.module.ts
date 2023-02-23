import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GoalsComponent } from './goals/goals.component';
import { FinancialHealthComponent } from './financial-health/financial-health.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GoalprogressComponent } from './goalprogress/goalprogress.component';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'goals', component: GoalsComponent},
  {path: 'selfie', component: SelfieComponent},
  
];
import { SelfieComponent } from './selfie/selfie.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoalsComponent,
    SelfieComponent,
    FinancialHealthComponent,
    LoginComponent,
    SignupComponent,
    GoalprogressComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }