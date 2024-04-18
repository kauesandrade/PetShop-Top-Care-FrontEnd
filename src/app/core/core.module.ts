import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './directives/button.directive';

const Components = [ButtonDirective];

@NgModule({
  exports: [...Components],
  declarations: [...Components],
  imports: [CommonModule],
})
export class CoreModule {}
