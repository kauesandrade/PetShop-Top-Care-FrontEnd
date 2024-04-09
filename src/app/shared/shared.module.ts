import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';

const Components = [
  CarouselComponent
]

@NgModule({
  exports: [
    ...Components
  ],
  declarations: [
    ...Components
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
