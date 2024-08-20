import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { ProductResponseCard } from '../../interfaces/product/response/product-response-card';
import { ProductCategoryResponse } from '../../interfaces/product/response/product-category-response';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss'],
})
export class ProductSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() category?: Array<number> | Array<ProductCategoryResponse>;
  @Input() divider: boolean = false;
  productList: Array<ProductResponseCard> = [];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    if (this.category?.length) {
      typeof this.category[0] === 'number' ? 
      this.productService.getProductsByCategories(this.category as Array<number>).subscribe((data) => {
        if(Array.isArray(data)){
          this.productList = data;
        }}) :
      this.productService.getProductsByCategories(this.convertToIds(this.category as Array<ProductCategoryResponse>)).subscribe((data) => {
        if(Array.isArray(data)){
          this.productList = data;
        }
      });
    }
  }

  convertToIds(categoires: Array<ProductCategoryResponse>) {
    return categoires.map(categori=> categori.id);
  }

}
