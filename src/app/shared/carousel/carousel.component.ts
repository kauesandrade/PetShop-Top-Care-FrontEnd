import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import EmblaCarousel from 'embla-carousel';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit, OnDestroy {

  private embla: any = null;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const emblaNode = this.elementRef.nativeElement.querySelector('.embla');
    const viewportNode = this.elementRef.nativeElement.querySelector('.embla__viewport');
    const prevBtnNode = this.elementRef.nativeElement.querySelector('.embla__button--prev');
    const nextBtnNode = this.elementRef.nativeElement.querySelector('.embla__button--next');
    const dotsNode = this.elementRef.nativeElement.querySelector('.embla__dots');

    const OPTIONS = { loop: true };

    this.embla = EmblaCarousel(viewportNode, OPTIONS);

    if (this.embla) {
      const removePrevNextBtnsClickHandlers = this.addPrevNextBtnsClickHandlers(prevBtnNode, nextBtnNode);

      this.embla.on('destroy', removePrevNextBtnsClickHandlers);
    }
  }

  ngOnDestroy(): void {
    if (this.embla) {
      this.embla.destroy();
    }
  }

  private addPrevNextBtnsClickHandlers(prevBtnNode: HTMLElement, nextBtnNode: HTMLElement): () => void {
    const prevBtnClickHandler = () => {
      if (this.embla) {
        this.embla.scrollPrev();
      }
    };

    const nextBtnClickHandler = () => {
      if (this.embla) {
        this.embla.scrollNext();
      }
    };

    prevBtnNode.addEventListener('click', prevBtnClickHandler);
    nextBtnNode.addEventListener('click', nextBtnClickHandler);

    return () => {
      prevBtnNode.removeEventListener('click', prevBtnClickHandler);
      nextBtnNode.removeEventListener('click', nextBtnClickHandler);
    };
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
