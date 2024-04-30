import { Component, OnInit } from '@angular/core';
import { MainCarousel } from 'src/app/shared/interfaces/main-carousel';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  

  produtos: Array<Product> = [
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: false,
    title: "Ração Cães Adultos Frango E Carne 15kg",
    brand: "Golden Special",
    rating: 5,
    price: 149.99,
    discountPrice: 190.40,
    maxInterestFreeParcels: 2,
    subscribersPrice: 130.00,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: false,
    title: "Ração Cães Adultos Frango E Carne 15kg",
    brand: "Golden Special",
    rating: 5,
    price: 149.99,
    discountPrice: 190.40,
    maxInterestFreeParcels: 2,
    subscribersPrice: 130.00,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: false,
    title: "Ração Cães Adultos Frango E Carne 15kg",
    brand: "Golden Special",
    rating: 5,
    price: 149.99,
    discountPrice: 190.40,
    maxInterestFreeParcels: 2,
    subscribersPrice: 130.00,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: false,
    title: "Ração Cães Adultos Frango E Carne 15kg",
    brand: "Golden Special",
    rating: 5,
    price: 149.99,
    discountPrice: 190.40,
    maxInterestFreeParcels: 2,
    subscribersPrice: 130.00,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: false,
    title: "Ração Cães Adultos Frango E Carne 15kg",
    brand: "Golden Special",
    rating: 5,
    price: 149.99,
    discountPrice: 190.40,
    maxInterestFreeParcels: 2,
    subscribersPrice: 130.00,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: false,
    title: "Ração Cães Adultos Frango E Carne 15kg",
    brand: "Golden Special",
    rating: 5,
    price: 149.99,
    discountPrice: 190.40,
    maxInterestFreeParcels: 2,
    subscribersPrice: 130.00,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: false,
    title: "Ração Cães Adultos Frango E Carne 15kg",
    brand: "Golden Special",
    rating: 5,
    price: 149.99,
    discountPrice: 190.40,
    maxInterestFreeParcels: 2,
    subscribersPrice: 130.00,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: false,
    title: "Ração Cães Adultos Frango E Carne 15kg",
    brand: "Golden Special",
    rating: 5,
    price: 149.99,
    discountPrice: 190.40,
    maxInterestFreeParcels: 2,
    subscribersPrice: 130.00,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: false,
    title: "Ração Cães Adultos Frango E Carne 15kg",
    brand: "Golden Special",
    rating: 5,
    price: 149.99,
    discountPrice: 190.40,
    maxInterestFreeParcels: 2,
    subscribersPrice: 130.00,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: false,
    title: "Ração Cães Adultos Frango E Carne 15kg",
    brand: "Golden Special",
    rating: 5,
    price: 149.99,
    discountPrice: 190.40,
    maxInterestFreeParcels: 2,
    subscribersPrice: 130.00,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
    favorite: false,
    title: "Ração Cães Adultos Frango E Carne 15kg",
    brand: "Golden Special",
    rating: 5,
    price: 149.99,
    discountPrice: 190.40,
    maxInterestFreeParcels: 2,
    subscribersPrice: 130.00,
  },
  
]

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
