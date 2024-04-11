import { Component, Input } from '@angular/core';
import {
  faHeart,
  faShoppingCart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  faHeart = faHeart;
  faStar = faStar;
  faShoppingCart = faShoppingCart;

  @Input() product?: Product = {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKb_VrQ8qleqISIXNNjCwAQtly_KKByH02OIGqzz6Qg&s',
    favorite: true,
    title: 'Ração úmida kelcat sachê carne',
    brand: 'Kelcat',
    rating: 4.99,
    price: 15.54,
    discountPrice: 5.54,
    maxInterestFreeParcels: 5,
    subscribersPrice: 3.54,
  };

  constructor() {}

  test() {
    console.log('XD');
  }
}
