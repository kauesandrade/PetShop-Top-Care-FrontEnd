import { Component, Input, OnInit } from '@angular/core';
import {
  faHeart,
  faShoppingCart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { ProductVariant } from 'src/app/shared/interfaces/product-variant';
import { ProductService } from '../services/product/product.service';

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
  
  constructor(private productService: ProductService) {
  }
  
  handleClickCart() {
    this.productService.addItemCart(this.product, 1);
    // this.routing.navigate(['/carrinho']);
  }
  handleClickBuy() {
  throw new Error('Method not implemented.');
  }
}
