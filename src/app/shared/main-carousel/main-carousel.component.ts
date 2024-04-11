import { Component, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core';
import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel';
import { MainCarousel } from '../interfaces/main-carousel';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements AfterViewInit, OnDestroy {

  constructor(private elementRef: ElementRef) { }
  
  ngAfterViewInit(): void {
    const viewportNode = this.elementRef.nativeElement.querySelector('.embla__viewport');
    const OPTIONS: EmblaOptionsType = {axis: 'x', loop: true };
    
    this.embla = EmblaCarousel(viewportNode, OPTIONS);
  }
  
  embla: any = null;
  @Input() itensCarousel?: Array<MainCarousel>;

  faAngleLeft = faAngleLeft
  faAngleRight = faAngleRight
  

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

