import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TextInputComponent } from './text-input/text-input.component';

const Components = [ButtonComponent, SelectInputComponent, TextAreaComponent, TextInputComponent];

@NgModule({
  exports: [...Components],
  declarations: [...Components],
  imports: [CommonModule],
})
export class CoreModule {}
