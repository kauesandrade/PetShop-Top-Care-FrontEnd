import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { RegisterAddressComponent } from './components/register-address/register-address.component';
import { CardDisplayComponent } from './components/card-display/card-display.component';
import { InputAmountComponent } from './components/input-amount/input-amount.component';
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';
import { OrderByComponent } from './components/order-by/order-by.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { ChooseAddressModalComponent } from './components/choose-address-modal/choose-address-modal.component';
import { OrderProductCardComponent } from './components/order-product-card/order-product-card.component';

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
  OrderProductCardComponent,
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
