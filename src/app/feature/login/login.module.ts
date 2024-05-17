import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ExternalLoginComponent } from './components/external-login/external-login.component';
import { ForgotPasswordEmailComponent } from './components/forgot-password-email/forgot-password-email.component';
import { ForgotPasswordCodeComponent } from './components/forgot-password-code/forgot-password-code.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  exports: [LoginComponent],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    ExternalLoginComponent,
    ForgotPasswordEmailComponent,
    ForgotPasswordCodeComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxMaskModule,
  ],
})
export class LoginModule {}
