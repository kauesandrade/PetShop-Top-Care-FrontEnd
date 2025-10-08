import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';
import { OrdersComponent } from './orders/orders.component';
import { PetsComponent } from './pets/pets.component';
import { LayoutComponent } from './components/layout/layout.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { AddressFormComponent } from './data/components/address-form/address-form.component';
import { ProfileFormComponent } from './data/components/profile-form/profile-form.component';
import { OrderDetailsComponent } from './orders/order/components/order-details/order-details.component';
import { ChooseProductComponent } from './orders/order/components/order-status/choose-product/choose-product.component';
import { OrderShippingComponent } from './orders/order/components/order-status/order-shipping/order-shipping.component';
import { OrderStatusComponent } from './orders/order/components/order-status/order-status.component';
import { ReviewProductComponent } from './orders/order/components/review-product/review-product.component';
import { OrderComponent } from './orders/order/order.component';
import { ChangePasswordComponent } from './data/components/change-password/change-password.component';
import { ContactFormComponent } from './data/components/contact-form/contact-form.component';
import { EditCardsComponent } from './data/components/edit-cards/edit-cards.component';
import { PetProfile } from './pets/pet/pet.component';
import { PetScheduleComponent } from './pets/pet-schedule/pet-schedule.component';

const Components = [DataComponent, OrdersComponent, PetsComponent];

@NgModule({
  exports: [...Components],
  declarations: [
    ...Components,
    LayoutComponent,
    ProfileFormComponent,
    ContactFormComponent,
    AddressFormComponent,
    ChangePasswordComponent,
    OrderCardComponent,
    OrderComponent,
    OrderStatusComponent,
    OrderDetailsComponent,
    OrderShippingComponent,
    ChooseProductComponent,
    ReviewProductComponent,
    EditCardsComponent,
    PetProfile,
    PetScheduleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule,
    FontAwesomeModule,
  ],
})
export class UserModule {}
