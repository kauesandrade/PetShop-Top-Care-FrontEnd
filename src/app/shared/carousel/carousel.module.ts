import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SharedModule } from '../shared.module';

const Components = [
  MainCarouselComponent,
  ProductCarouselComponent,
]

@NgModule({
  exports: [...Components],
  declarations: [...Components],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class CarouselModule { }
