import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CoreModule } from '../core/core-module.module';
import { SharedModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    RegistrationComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
