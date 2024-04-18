import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMainComponent } from './footer/footer-main/footer-main.component';
import { FooterCopyrightComponent } from './footer/footer-copyright/footer-copyright.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';

const Components = [
  ButtonComponent,
  HeaderComponent,
  FooterComponent,
  SelectInputComponent,
  TextAreaComponent,
  TextInputComponent,
  DateInputComponent,
  RadioInputComponent,
  CheckboxInputComponent,
  PasswordInputComponent,
];

@NgModule({
  exports: [...Components],
  declarations: [
    ...Components,
    HeaderTopComponent,
    HeaderMainComponent,
    FooterMainComponent,
    FooterCopyrightComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
})
export class CoreModule {}
