import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Input,
} from '@angular/core';
import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { RoundCard } from '../../interfaces/round-card';

@Component({
  selector: 'app-round-card-carousel',
  templateUrl: './round-card-carousel.component.html',
  styleUrls: ['./round-card-carousel.component.scss']
})
export class RoundCardCarouselComponent implements AfterViewInit, OnDestroy {

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
  
  @Input() roundCardList: Array<RoundCard> = [
    { imgSrc: "dsad",
      title: "dasd"
    },
    { imgSrc: "dsad",
      title: "dasd"
    },
    { imgSrc: "dsad",
      title: "dasd"
    },
    { imgSrc: "dsad",
      title: "dasd"
    },
  ]

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
