import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

const Components = [ButtonComponent];

@NgModule({
  exports: [...Components],
  declarations: [...Components],
  imports: [CommonModule],
})
export class CoreModule {}
