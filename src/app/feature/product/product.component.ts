import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  amount: number = 1;
  id?: any;

  constructor(
    private route: ActivatedRoute,
    private routing: Router,
    protected productService: ProductService
  ) {
    this.id = this.route.snapshot.paramMap.get('id')?.replace('%20', ' ');
    productService.findProduct(this.id);
    this.verifyProduct();
  }

  ngOnInit(): void {}

  getValueAmount(evt: number) {
    this.amount = evt;
  }

  getHandleClickCart() {
    // addItemCart(this.productService.getProduct(), this.amount)
    console.log('clickCart');

    // this.routing.navigate(['/carrinho']);
  }
  getHandleClickBuy() {
    console.log('clickBuy');
  }

  // getProductVariant(evt: ProductVariant) {
  //   this.productService.changeVariableProduct(evt);
  // }

  private verifyProduct() {
    if (!this.productService.getProduct()) {
      this.routing.navigate(['/']);
    }
  }
}
