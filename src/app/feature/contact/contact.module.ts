import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  exports: [ContactComponent],
  declarations: [ContactComponent, ContactFormComponent],
  imports: [CommonModule, CoreModule, ReactiveFormsModule],
})
export class ContactModule {}
