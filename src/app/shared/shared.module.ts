import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule } from 'ngx-mask';
import { CoreModule } from '../core/core.module';
import { CardDisplayComponent } from './components/card-display/card-display.component';
import { InputAmountComponent } from './components/input-amount/input-amount.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { ChooseAddressModalComponent } from './components/choose-address-modal/choose-address-modal.component';
import { OrderByComponent } from './components/order-by/order-by.component';
import { ProductItemCardComponent } from './components/product-item-card/product-item-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { RegisterAddressComponent } from './components/register-address/register-address.component';
import { ProductItemSectionComponent } from './components/product-item-section/product-item-section.component';
import { CardCardComponent } from './components/card-card/card-card.component';
import { CardFormModalComponent } from './components/card-form-modal/card-form-modal.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { PetshopCardComponent } from './components/petshop-card/petshop-card.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const Components = [
  ProductCardComponent,
  ProductSectionComponent,
  ProductCarouselComponent,
  RegisterAddressComponent,
  InputAmountComponent,
  ProductLayoutComponent,
  OrderByComponent,
  ProductFilterComponent,
  MainCarouselComponent,
  CardDisplayComponent,
  ChooseAddressModalComponent,
  ProductItemCardComponent,
  ProductItemSectionComponent,
  CardCardComponent,
  CardFormModalComponent,
  PetCardComponent,
  AddressCardComponent,
  PetshopCardComponent,
  CalendarComponent,
];

@NgModule({
  exports: [...Components],
  declarations: [...Components],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
})
export class SharedModule {}
