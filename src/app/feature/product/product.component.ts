import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductResponseCard, ProductResponsePageDTO } from 'src/app/shared/interfaces/product/product';
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

  productPage!: ProductResponsePageDTO;
  productVariant!: ProductVariantResponse;

  constructor(private route: ActivatedRoute, private routing: Router, protected productService: ProductService, private cartService: CartService) { 
    this.id = this.route.snapshot.paramMap.get("id")?.replace("%20", " ");
  }
  
  ngOnInit(): void {
    this.productService.getProductByCode(this.id).subscribe((data) => {
      this.productPage = data;
      this.productVariant = data.variants[0];
    }); 
    this.verifyProduct();
  }

  getValueAmount(evt: number) {
    this.amount = evt;
  }

  getHandleClickCart() {

    const productCart: ProductResponseCard = {
      code: this.productPage.code,
      variantCode: this.productVariant.variantCode,
      title: this.productPage.title,
      brand: this.productPage.brand,
      price: this.productVariant.price,
      discountPrice: this.productVariant.discountPrice,
      parcels: this.productVariant.parcels,
      rating: this.productPage.rating,
      image: this.productVariant.images[0],
    }

    this.cartService.addItemCart(productCart, this.amount);
  }
  getHandleClickBuy() {

    const productCart: ProductResponseCard = {
      code: this.productPage.code,
      variantCode: this.productVariant.variantCode,
      title: this.productPage.title,
      brand: this.productPage.brand,
      price: this.productVariant.price,
      discountPrice: this.productVariant.discountPrice,
      parcels: this.productVariant.parcels,
      rating: this.productPage.rating,
      image: this.productVariant.images[0],
    }
    this.cartService.addItemCart(productCart, this.amount);
    this.routing.navigate(['/carrinho']);
  }

  changeVariableProduct(evt: ProductVariantResponse){
    this.productVariant = evt;
  }

  private verifyProduct() {
    if (!this.productPage) {
      this.routing.navigate(['/']);
    }
  }
}
