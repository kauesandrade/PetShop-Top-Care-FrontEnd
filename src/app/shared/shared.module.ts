import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';

import { CarouselModule } from './components/carousel/carousel.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { RegisterAddressComponent } from './components/register-address/register-address.component';

const Components = [
  ProductCardComponent,
  ProductSectionComponent,
  ProductCarouselComponent,
  RegisterAddressComponent,
];

@NgModule({
  exports: [...Components, CarouselModule],
  declarations: [...Components],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    FontAwesomeModule,
    CarouselModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
})
export class SharedModule {}
