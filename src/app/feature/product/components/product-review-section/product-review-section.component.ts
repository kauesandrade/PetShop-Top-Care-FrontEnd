import { Component, Input, OnInit } from '@angular/core';
import { ProductReviewResponse } from 'src/app/shared/interfaces/product/product-review';

@Component({
  selector: 'app-product-review-section',
  templateUrl: './product-review-section.component.html',
  styleUrls: ['./product-review-section.component.scss'],
})
export class ProductReviewSectionComponent implements OnInit {
  @Input() reviews?: Array<ProductReviewResponse>;

  constructor() {}

  ngOnInit(): void {}
}
