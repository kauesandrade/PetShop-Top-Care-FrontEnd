import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss'],
})
export class ProductSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() category!: Array<string>;
  productList!: Array<Product>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    if(this.category.length){
     this.productList = this.productService.getProductOfCategory(this.category);
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
