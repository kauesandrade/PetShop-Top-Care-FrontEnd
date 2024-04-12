import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { MainCarouselComponent } from '../main-carousel/main-carousel.component';

const Components = [
  MainCarouselComponent,
  ProductCarouselComponent,
]

@NgModule({
  exports: [...Components],
  declarations: [...Components, ProductCarouselComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class CarouselModule { }
