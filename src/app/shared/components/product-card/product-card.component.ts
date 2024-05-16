import { Component, Input } from '@angular/core';
import {
  faHeart,
  faShoppingCart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { ProductVariant } from 'src/app/shared/interfaces/product-variant';
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

  constructor(private cartService: CartService) {}

  handleClickCart() {
    this.cartService.addItemCart(this.product, 1);
    // this.routing.navigate(['/carrinho']);
  }
  handleClickBuy() {
    throw new Error('Method not implemented.');
  }
}
