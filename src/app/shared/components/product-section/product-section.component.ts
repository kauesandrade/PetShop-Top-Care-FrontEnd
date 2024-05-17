import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product/product';
import { ProductVariant } from '../../interfaces/product/product-variant';
import { FilterService } from '../../services/filter/filter.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss'],
})
export class ProductSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() category?: Array<string>;
  @Input() product?: Product | ProductVariant;
  @Input() divider: boolean = false;
  productList!: Array<ProductVariant>;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    if (this.category?.length) {
      this.productList = this.filterService.getAllProductsOfCategory(
        this.category
      );
      this.format();
    } else if (this.product) {
      this.productList = this.filterService.getSimilarProducts(this.product);
      this.format();
    }
  }

  format() {
    const a = [...this.productList];
    this.productList = [];
    a.forEach((pro) => {
      if (this.productList.length < 10) {
        this.productList.push(pro);
      }
    });
  }
}
