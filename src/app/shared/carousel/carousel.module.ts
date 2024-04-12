import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { SharedModule } from '../shared.module';

const Components = [
  MainCarouselComponent,
]

@NgModule({
  exports: [...Components],
  declarations: [...Components],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class CarouselModule { }
