import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import {
  faHeart,
  faShoppingCart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cart/cart.service';
import { ProductResponseCard } from '../../interfaces/product/product';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnChanges {
  faHeart = faHeart;
  faStar = faStar;
  faShoppingCart = faShoppingCart;

  @Input() product!: ProductResponseCard;
  image!: File;

  constructor(private cartService: CartService, private router: Router, protected productService: ProductService) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    // if (this.product) {
    //   console.log(this.product);
    //   this.image = this.productService.dataURLtoFile(this.product.image.url, 'image.jpg')
    // }
  }

  handleClickCart() {
    this.cartService.addItemCart(this.product, 1);
  }

  handleClickBuy() {
    this.cartService.addItemCart(this.product, 1);
    this.router.navigate(['/carrinho']);
  }

}
