import { Component, Input, OnInit } from '@angular/core';
import { ProductVariant } from '../../interfaces/product/product-variant';
import { ProductResponseCard } from '../../interfaces/product/response/product-response-card';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss'],
})
export class ProductLayoutComponent implements OnInit {
  @Input() products?: Array<ProductResponseCard>;

  constructor() {}

  ngOnInit(): void {}
}
