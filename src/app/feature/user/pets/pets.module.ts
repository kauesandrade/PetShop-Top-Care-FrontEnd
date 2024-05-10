import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';

@NgModule({
  exports: [PetsComponent],
  declarations: [PetsComponent],
  imports: [CommonModule],
})
export class PetsModule {}
