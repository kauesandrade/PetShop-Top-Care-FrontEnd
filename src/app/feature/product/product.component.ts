import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductResponsePage } from 'src/app/shared/interfaces/product/product';
import { ProductVariantResponse } from 'src/app/shared/interfaces/product/product-variant';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  amount: number = 1;
  id?: any;

  productPage!: ProductResponsePage;
  productVariant!: ProductVariantResponse;

  constructor(private route: ActivatedRoute, private routing: Router, protected productService: ProductService, private cartService: CartService) { 
    this.id = this.route.snapshot.paramMap.get("id")?.replace("%20", " ");
    // this.verifyProduct();
  }

  ngOnInit(): void {
    this.productService.getProductByCode(this.id).subscribe((data) => {
      this.productPage = data;
      console.log(this.productPage);
      this.productVariant = data.variants[0];
    }); 
  }

  getValueAmount(evt: number) {
    this.amount = evt;
  }

  getHandleClickCart() {
    // this.cartService.addItemCart(this.productService.getProductVariant(), this.amount);
  }
  getHandleClickBuy() {
    // this.cartService.addItemCart(this.productService.getProductVariant(), this.amount);
    this.routing.navigate(['/carrinho']);
  }

  changeVariableProduct(evt: ProductVariantResponse){
    this.productVariant = evt;
  }

  private verifyProduct() {
    if (!this.productService.getProduct()) {
      this.routing.navigate(['/']);
    }
  }
}
