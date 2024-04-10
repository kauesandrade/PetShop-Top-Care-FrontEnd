import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const Components: any[] = [];

@NgModule({
  exports: [...Components],
  declarations: [...Components],
  imports: [CommonModule],
})
export class CoreModule {}
