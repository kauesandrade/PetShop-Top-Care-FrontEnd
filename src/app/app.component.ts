import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MainCarousel } from './shared/interfaces/main-carousel';
import { Product } from './shared/interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}

  faIcon = faSearch;
  showPassword = false;

  onSelect(event: string) {
    console.log(event);
  }

  getValue(event: string | boolean) {
    console.log(event);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

//   product: Array<Product> = [
//     {
//     imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
//     favorite: true,
//     title: "X1",
//     brand: "XD",
//     rating: 5,
//     price: 11,
//     discountPrice: 12,
//     maxInterestFreeParcels: 2,
//     subscribersPrice: 10,
//   },
//   {
//     imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
//     favorite: true,
//     title: "XD",
//     brand: "XD",
//     rating: 5,
//     price: 11,
//     discountPrice: 12,
//     maxInterestFreeParcels: 2,
//     subscribersPrice: 10,
//   },
//   {
//     imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
//     favorite: true,
//     title: "XD",
//     brand: "XD",
//     rating: 5,
//     price: 11,
//     discountPrice: 12,
//     maxInterestFreeParcels: 2,
//     subscribersPrice: 10,
//   },
//   {
//     imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
//     favorite: true,
//     title: "XD",
//     brand: "XD",
//     rating: 5,
//     price: 11,
//     discountPrice: 12,
//     maxInterestFreeParcels: 2,
//     subscribersPrice: 10,
//   },
//   {
//     imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
//     favorite: true,
//     title: "XD",
//     brand: "XD",
//     rating: 5,
//     price: 11,
//     discountPrice: 12,
//     maxInterestFreeParcels: 2,
//     subscribersPrice: 10,
//   },
//   {
//     imgSrc: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_UF1000,1000_QL80_.jpg",
//     favorite: true,
//     title: "XD",
//     brand: "XD",
//     rating: 5,
//     price: 11,
//     discountPrice: 12,
//     maxInterestFreeParcels: 2,
//     subscribersPrice: 10,
//   },
// ]
}
