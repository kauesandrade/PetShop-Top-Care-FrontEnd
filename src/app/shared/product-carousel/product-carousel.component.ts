import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Input,
} from '@angular/core';
import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel';
import { Product } from '../interfaces/product';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent implements AfterViewInit, OnDestroy {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const viewportNode =
      this.elementRef.nativeElement.querySelector('.embla__viewport');
    const OPTIONS: EmblaOptionsType = { align: 'start', loop: true };

    this.embla = EmblaCarousel(viewportNode, OPTIONS);
  }

  embla: any = null;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  @Input() itensProduct?: Array<Product>;

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
