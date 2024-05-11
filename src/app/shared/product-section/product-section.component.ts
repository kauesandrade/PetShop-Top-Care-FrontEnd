import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { ProductVariant } from '../interfaces/product-variant';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss'],
})
export class ProductSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() category?: Array<string>;
  @Input() product?: Product | ProductVariant;
  productList!: Array<ProductVariant>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    if(this.category?.length){
     this.productList = this.productService.getProductsOfCategory(this.category);
      this.format();
    }else if(this.product){
      this.productList = this.productService.getProductOfCategoryWithoutOfProduct(this.product);
      this.format();
    }
  }

  format(){
    const a = [...this.productList];
    this.productList = []
    a.forEach((pro)=>{
      if(this.productList.length < 10){
        this.productList.push(pro)
      }
    })
  }
}
