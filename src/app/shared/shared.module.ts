import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { OrderByComponent } from './components/order-by/order-by.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { RegisterAddressComponent } from './components/register-address/register-address.component';
import { InputAmountComponent } from './components/input-amount/input-amount.component';
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';

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
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
})
export class SharedModule {}
