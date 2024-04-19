import { Component } from '@angular/core';
import { MainCarousel } from './shared/interfaces/main-carousel';
import { Product } from './shared/interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() {}
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

  product: Array<Product> = [
    {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: true,
    title: "X1",
    brand: "XD",
    rating: 5,
    price: 11,
    discountPrice: 12,
    maxInterestFreeParcels: 2,
    subscribersPrice: 10,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: true,
    title: "XD",
    brand: "XD",
    rating: 5,
    price: 11,
    discountPrice: 12,
    maxInterestFreeParcels: 2,
    subscribersPrice: 10,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: true,
    title: "XD",
    brand: "XD",
    rating: 5,
    price: 11,
    discountPrice: 12,
    maxInterestFreeParcels: 2,
    subscribersPrice: 10,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: true,
    title: "XD",
    brand: "XD",
    rating: 5,
    price: 11,
    discountPrice: 12,
    maxInterestFreeParcels: 2,
    subscribersPrice: 10,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: true,
    title: "XD",
    brand: "XD",
    rating: 5,
    price: 11,
    discountPrice: 12,
    maxInterestFreeParcels: 2,
    subscribersPrice: 10,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: true,
    title: "XD",
    brand: "XD",
    rating: 5,
    price: 11,
    discountPrice: 12,
    maxInterestFreeParcels: 2,
    subscribersPrice: 10,
  },
]
}
