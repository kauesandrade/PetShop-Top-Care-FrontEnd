import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';

@NgModule({
  exports: [StoreComponent],
  declarations: [StoreComponent],
  imports: [CommonModule],
})
export class StoreModule {}
