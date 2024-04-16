import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from '../core/core.module';
import { ProductSectionComponent } from './product-section/product-section.component';

const Components = [
  ProductCardComponent,
  ProductSectionComponent,
  CarouselComponent,
];

@NgModule({
  exports: [...Components],
  declarations: [...Components],
  imports: [CommonModule, CoreModule, FontAwesomeModule],
})
export class SharedModule {}
