import { Component, Input, OnInit } from '@angular/core';
import {
  faHeart,
  faShoppingCart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { ProductVariant } from 'src/app/shared/interfaces/product-variant';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  faHeart = faHeart;
  faStar = faStar;
  faShoppingCart = faShoppingCart;

  @Input() product!: ProductVariant;
  
  constructor() {
  }

  onClick() {
    console.log('clicked');
  }
}
