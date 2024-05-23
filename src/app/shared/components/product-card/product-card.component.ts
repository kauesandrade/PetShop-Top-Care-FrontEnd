import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  faHeart,
  faShoppingCart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { ProductVariant } from '../../interfaces/product/product-variant';
import { CartService } from '../../services/cart/cart.service';

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

  constructor(private cartService: CartService, private router: Router) {}

  handleClickCart() {
    this.cartService.addItemCart(this.product, 1);
  }
  handleClickBuy() {
    this.cartService.addItemCart(this.product, 1);
    this.router.navigate(['/carrinho']);
  }
}
