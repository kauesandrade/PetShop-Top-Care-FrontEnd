import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const Components = [ButtonComponent, SelectInputComponent, TextAreaComponent, TextInputComponent, 
                      DateInputComponent, RadioInputComponent, CheckboxInputComponent];

@NgModule({
  exports: [...Components],
  declarations: [...Components],
  imports: [CommonModule, FontAwesomeModule],
})
export class CoreModule {}
