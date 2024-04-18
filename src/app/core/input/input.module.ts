import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TextInputComponent } from './text-input/text-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const Components = [
  CheckboxInputComponent,
  DateInputComponent,
  PasswordInputComponent,
  RadioInputComponent,
  SelectInputComponent,
  TextAreaComponent,
  TextInputComponent,
];

@NgModule({
  exports: [...Components],
  declarations: [...Components],
  imports: [CommonModule, FontAwesomeModule],
})
export class InputModule {}
