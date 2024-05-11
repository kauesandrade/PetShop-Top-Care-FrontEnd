import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductVariant } from 'src/app/shared/interfaces/product-variant';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  product?: Product;
  productVariants!: Array<ProductVariant>;
  productVariant!: ProductVariant;


  id?: any;

  constructor(private route: ActivatedRoute, private routing: Router, private productService: ProductService) { 
    this.id = this.route.snapshot.paramMap.get("id")?.replace("%20", " ");
    this.product = productService.findProductByUrl(this.id);

    if(this.product){
      this.productVariants = productService.getAllProductVariants(this.product);
      this.productVariant = productService.getFirstProductVariant(this.product);
    }

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

  getProductVariant(evt: ProductVariant) {
    this.productVariant = evt;
    console.log(this.productVariant)
  }
  
  verifyProduct() {
    if (!this.product) {
      this.routing.navigate(['/']);
    }
  }
}
