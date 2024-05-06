import { Component, OnInit } from '@angular/core';
import { MainCarousel } from 'src/app/shared/interfaces/main-carousel';
import * as productData from '../../../assets/JsonFiles/products.json';
import { RoundCard } from '../../shared/interfaces/round-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  product: any = productData;
  products: any = this.product.product;

  itens: Array<MainCarousel> = [
    {
      imgSrc: '../assets/1.png',
      link: '',
      alt: 'card 1',
    },
    {
      imgSrc: '../assets/2.png',
      link: '',
      alt: 'card 2',
    },
    {
      imgSrc: '../assets/3.png',
      link: '',
      alt: 'card 3',
    },
    {
      imgSrc: '../assets/4.png',
      link: '/sobre-nos',
      alt: 'card 4',
    },
    {
      imgSrc: '../assets/5.png',
      link: '/nossas-lojas',
      alt: 'card 5',
    },
    {
      imgSrc: '../assets/6.png',
      link: 'contate-nos',
      alt: 'card 6',
    },
  ];

  roundList: Array<RoundCard> = [
    {
      imgSrc:
        'https://logodownload.org/wp-content/uploads/2019/09/pedigree-logo-5.png',
      title: 'Pedigree',
    },
    {
      imgSrc:
        'https://i.pinimg.com/736x/b3/66/57/b3665754998e1377da73fdc08ec83555.jpg',
      title: 'Purina',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsgoZbtvOTXtRKa_0I5e3kniuXSXzAEL-selvDfdO0g&s',
      title: 'Golden',
    },
    {
      imgSrc: 'https://static.petz.com.br/novaLoja/images/brands/zeedog.jpg',
      title: 'Zee.dog',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRR5o_mITghnmjcUYROkbMkc81AgKO8yGdVDmTbQyh_Q&s',
      title: 'Whiskas',
    },
    {
      imgSrc:
        'https://static.petz.com.br/fotos/imagem-marca-supersecao-super_secao.jpg',
      title: 'Super Secão',
    },
    {
      imgSrc: 'https://static.petz.com.br/novaLoja/images/brands/nd.jpg',
      title: 'N&D Prime',
    },
  ];

  ngOnInit(): void {}
}
