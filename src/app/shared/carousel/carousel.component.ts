import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel';
import { AxisOptionType } from 'embla-carousel/components/Axis';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit, OnDestroy {

  constructor(private elementRef: ElementRef) { }
  
  ngAfterViewInit(): void {
    const viewportNode = this.elementRef.nativeElement.querySelector('.embla__viewport');
    const OPTIONS: EmblaOptionsType = {axis: 'x', loop: true }
    
    this.embla = EmblaCarousel(viewportNode, OPTIONS);
  }
  
  embla: any = null;

  itens: Array<string> = ['1','2','3']

  ngOnDestroy(): void {
    if (this.embla) {
      this.embla.destroy();
    }
  }

  prevSlide(): void {
    if (this.embla) {
      this.embla.scrollPrev();
    }
  }

  nextSlide(): void {
    if (this.embla) {
      this.embla.scrollNext();
    }
  }

}

