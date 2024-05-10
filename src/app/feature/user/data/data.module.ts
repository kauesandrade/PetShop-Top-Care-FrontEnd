import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';
import { UserModule } from '../user.module';

@NgModule({
  exports: [DataComponent],
  declarations: [DataComponent],
  imports: [CommonModule, UserModule],
})
export class DataModule {}
