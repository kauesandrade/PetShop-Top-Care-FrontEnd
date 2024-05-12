import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductVariant } from 'src/app/shared/interfaces/product-variant';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  productsList?: Array<ProductVariant>;
  seachBy!: string;
  
  constructor(private route: ActivatedRoute, private productService: ProductService) { 
  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.seachBy = params['q'].replace('%20', ' ');
      this.productsList = this.productService.searchProducts(params['q'].replace('%20', ' '));
      console.log(this.productsList);
    });
  }
  
  getOrderBy(evt: string) {
    this.productsList = this.productService.orderOf(evt);
  }


}
