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
    // { imgSrc: "https://logodownload.org/wp-content/uploads/2019/09/pedigree-logo-5.png",
    //   title: "Pedigree"
    // },
    // { imgSrc: "https://i.pinimg.com/736x/b3/66/57/b3665754998e1377da73fdc08ec83555.jpg",
    //   title: "Purina"
    // },
    // { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsgoZbtvOTXtRKa_0I5e3kniuXSXzAEL-selvDfdO0g&s",
    //   title: "Golden"
    // },
    // { imgSrc: "https://static.petz.com.br/novaLoja/images/brands/zeedog.jpg",
    //   title: "Zee.dog"
    // },
    // { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRR5o_mITghnmjcUYROkbMkc81AgKO8yGdVDmTbQyh_Q&s",
    //   title: "Whiskas"
    // },
    // { imgSrc: "https://static.petz.com.br/fotos/imagem-marca-supersecao-super_secao.jpg",
    //   title: "Super Secão"
    // },
    // { imgSrc: "https://static.petz.com.br/novaLoja/images/brands/nd.jpg",
    //   title: "N&D Prime"
    // },
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
