import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';

@NgModule({
  exports: [OrdersComponent],
  declarations: [OrdersComponent],
  imports: [CommonModule],
})
export class OrdersModule {}
