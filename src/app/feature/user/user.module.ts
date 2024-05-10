import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { OrdersComponent } from './orders/orders.component';
import { PetsComponent } from './pets/pets.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';

const Components = [
  DataComponent,
  OrdersComponent,
  PetsComponent,
  SubscriptionsComponent,
];

@NgModule({
  exports: [...Components],
  declarations: [...Components, LayoutComponent],
  imports: [CommonModule, RouterModule, CoreModule],
})
export class UserModule {}
