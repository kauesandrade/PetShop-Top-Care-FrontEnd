import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { OrdersComponent } from './orders/orders.component';
import { PetsComponent } from './pets/pets.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { ProfileFormComponent } from './data/components/profile-form/profile-form.component';
import { ContactFormComponent } from './data/components/contact-form/contact-form.component';
import { AddressFormComponent } from './data/components/address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const Components = [
  DataComponent,
  OrdersComponent,
  PetsComponent,
  SubscriptionsComponent,
];

@NgModule({
  exports: [...Components],
  declarations: [
    ...Components,
    LayoutComponent,
    ProfileFormComponent,
    ContactFormComponent,
    AddressFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    ReactiveFormsModule,
    NgxMaskModule,
    FontAwesomeModule,
  ],
})
export class UserModule {}
