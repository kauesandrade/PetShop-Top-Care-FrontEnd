import { Component, OnInit } from '@angular/core';
import { MainCarousel } from 'src/app/shared/interfaces/main-carousel';
import * as productData from '../../../assets/JsonFiles/products.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  product: any = productData;
  products: any = this.product.product;
  
  itens: Array<MainCarousel> = 
  [
  {
    imgSrc: "../assets/1.png",
    link: "",
    alt: "card 1"
  },
  {
    imgSrc: "../assets/2.png",
    link: "",
    alt: "card 2"
  },
  {
    imgSrc: "../assets/3.png",
    link: "",
    alt: "card 3"
  },
  {
    imgSrc: "../assets/4.png",
    link: "/sobre-nos",
    alt: "card 4"
  },
  {
    imgSrc: "../assets/5.png",
    link: "/nossas-lojas",
    alt: "card 5"
  },
  {
    imgSrc: "../assets/6.png",
    link: "contate-nos",
    alt: "card 6"
  },
];
}
