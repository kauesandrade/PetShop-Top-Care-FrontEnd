import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from '../core/core.module';
import { ProductSectionComponent } from './product-section/product-section.component';
import { CarouselModule } from './carousel/carousel.module';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { InputAmountComponent } from './input-amount/input-amount.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const Components = [
  ProductCardComponent,
  ProductSectionComponent,
  ProductCarouselComponent,
  InputAmountComponent,
];

@NgModule({
  exports: [...Components, CarouselModule],
  declarations: [...Components],
  imports: [CommonModule, CoreModule, FontAwesomeModule, CarouselModule, FormsModule, RouterModule],
})
export class SharedModule {}
