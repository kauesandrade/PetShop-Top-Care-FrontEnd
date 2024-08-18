import { Component, Input, OnInit } from '@angular/core';
import { ProductSpecification } from 'src/app/shared/interfaces/product/product-specification';
import { ProductSpecificationsResponse } from 'src/app/shared/interfaces/product/response/product-specifications-response';

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
