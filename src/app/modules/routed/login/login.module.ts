import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleButtonComponent } from './components/google-button/google-button.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    GoogleButtonComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
