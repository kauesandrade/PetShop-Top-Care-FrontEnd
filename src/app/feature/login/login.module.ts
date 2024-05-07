import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CoreModule } from 'src/app/core/core.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ExternalLoginComponent } from './components/external-login/external-login.component';

@NgModule({
  exports: [LoginComponent],
  declarations: [LoginComponent, LoginFormComponent, ExternalLoginComponent],
  imports: [CommonModule, CoreModule],
})
export class LoginModule {}
