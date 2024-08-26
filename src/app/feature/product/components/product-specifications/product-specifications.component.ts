import { Component, Input, OnInit } from '@angular/core';
import { ProductSpecification, ProductSpecificationsResponse } from 'src/app/shared/interfaces/product/product-specification';

@Component({
  selector: 'app-product-specifications',
  templateUrl: './product-specifications.component.html',
  styleUrls: ['./product-specifications.component.scss'],
})
export class ProductSpecificationsComponent implements OnInit {
  constructor() {}

  @Input() specifications?: Array<ProductSpecificationsResponse>;

  ngOnInit(): void {}
}
