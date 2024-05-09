import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { CoreModule } from 'src/app/core/core.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [RegisterComponent, RegisterFormComponent],
  exports: [RegisterComponent],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    FontAwesomeModule,
  ],
})
export class RegisterModule {}
