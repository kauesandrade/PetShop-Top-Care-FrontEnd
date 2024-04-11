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

  @Input() product!: Product;

  constructor() {}

  onClick() {
    console.log('clicked');
  }
}
