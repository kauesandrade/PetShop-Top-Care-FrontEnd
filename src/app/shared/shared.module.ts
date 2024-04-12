import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from '../core/core.module';
import { CarouselModule } from './carousel/carousel.module';

const Components = [
  ProductCardComponent
];

@NgModule({
  exports: [...Components, CarouselModule],
  declarations: [...Components],
  imports: [CommonModule, CoreModule, FontAwesomeModule, CarouselModule],
})
export class SharedModule {}
