import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import emblaCarousel, { EmblaOptionsType } from 'embla-carousel';
import { Image } from 'src/app/shared/interfaces/product/image';
import { ImageResponse } from 'src/app/shared/interfaces/product/response/image-response';

@Component({
  selector: 'app-product-details-carousel',
  templateUrl: './product-details-carousel.component.html',
  styleUrls: ['./product-details-carousel.component.scss']
})
export class ProductDetailsCarouselComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() images!: Array<ImageResponse>;
  selectImage?: ImageResponse; 

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.selectImage = this.images[0];
  }

  ngAfterViewInit(): void {
    const viewportNode = this.elementRef.nativeElement.querySelector('.embla__viewport');
    const OPTIONS: EmblaOptionsType = { axis: 'y' };
    this.embla = emblaCarousel(viewportNode, OPTIONS);
  }

  embla: any = null;

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

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

  getIdImage(id: ImageResponse){
    this.selectImage = id;
  }

}
