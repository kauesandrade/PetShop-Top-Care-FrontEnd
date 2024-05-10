import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { TypeProduct } from 'src/app/shared/interfaces/type-product';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  product?: Product;
  typeProduct?: TypeProduct;
  id?: any;
  
  constructor(private route: ActivatedRoute, private routing: Router, private productService: ProductService) {
    this.id = this.route.snapshot.paramMap.get("id")?.replace("%20", " ");
    this.product = productService.findProduct(this.id);
    this.verifyProduct();
  }
  
  ngOnInit(): void {
  }
  
  getValueAmount(evt: number) {
    console.log(evt)
  }
  getHandleClickCart() {
    console.log("clickCart")
    // this.routing.navigate(['/carrinho']);
  }
  getHandleClickBuy() {
    console.log("clickBuy")
  }
  getTypeProduct(evt: TypeProduct) {
    this.typeProduct = evt;
    console.log(this.typeProduct)
  }
  
  verifyProduct() {
    if (!this.product) {
      this.routing.navigate(['/']);
    }
  }
}
