import { Component, OnInit } from '@angular/core';
import { MainCarousel } from 'src/app/shared/interfaces/main-carousel';
import { Product } from 'src/app/shared/interfaces/product';
import * as productData from '../../../assets/JsonFiles/products.json';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  products: Array<Product> = [];
  category1: Array<string> = ["oferta"];
  category2: Array<string> = ["avaliado"];

  constructor() { }

  ngOnInit(): void {
  }

  
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
