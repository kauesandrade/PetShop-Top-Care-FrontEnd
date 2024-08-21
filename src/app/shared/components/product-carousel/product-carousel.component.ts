import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Input,
  OnInit,
} from '@angular/core';
import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ProductVariant } from '../../interfaces/product/product-variant';
import { ProductResponseCard } from '../../interfaces/product/product';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent implements AfterViewInit, OnDestroy, OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    console.log(this.productList);
  }

  ngAfterViewInit(): void {
    const viewportNode =
      this.elementRef.nativeElement.querySelector('.embla__viewport');
    const OPTIONS: EmblaOptionsType = {
      breakpoints: {
        '(min-width: 768px)': { align: 'start', loop: false },
      },
      align: 'center',
      slidesToScroll: 1,
      skipSnaps: true,
      loop: true,
    };

    this.embla = EmblaCarousel(viewportNode, OPTIONS);
  }

  embla: any = null;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  @Input() productList?: Array<ProductResponseCard>;

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
