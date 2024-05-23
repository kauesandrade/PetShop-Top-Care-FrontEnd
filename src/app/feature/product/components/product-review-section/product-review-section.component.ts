import { Component, Input, OnInit } from '@angular/core';
import { ProductReview } from 'src/app/shared/interfaces/product/product-review';

@Component({
  selector: 'app-product-review-section',
  templateUrl: './product-review-section.component.html',
  styleUrls: ['./product-review-section.component.scss'],
})
export class ProductReviewSectionComponent implements OnInit {
  @Input() reviews?: Array<ProductReview>;

  constructor() {}

  ngOnInit(): void {}
}
