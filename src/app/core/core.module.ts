import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './directives/button.directive';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMainComponent } from './footer/footer-main/footer-main.component';
import { FooterCopyrightComponent } from './footer/footer-copyright/footer-copyright.component';
import { InputModule } from './input/input.module';
import { CheckboxInputComponent } from './input/checkbox-input/checkbox-input.component';
import { DateInputComponent } from './input/date-input/date-input.component';
import { PasswordInputComponent } from './input/password-input/password-input.component';
import { RadioInputComponent } from './input/radio-input/radio-input.component';
import { SelectInputComponent } from './input/select-input/select-input.component';
import { TextAreaComponent } from './input/text-area/text-area.component';
import { TextInputComponent } from './input/text-input/text-input.component';

const Components = [
  ButtonDirective,
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
  exports: [...Components, InputModule],
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
