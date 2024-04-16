import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

@NgModule({
  exports: [ContactComponent],
  declarations: [ContactComponent],
  imports: [CommonModule],
})
export class ContactModule {}
