import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  exports: [ContactComponent],
  declarations: [ContactComponent],
  imports: [CommonModule, CoreModule],
})
export class ContactModule {}
