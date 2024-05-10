import { Component, Input, OnInit } from '@angular/core';
import { ReviewProduct } from 'src/app/shared/interfaces/review-product';

@Component({
  selector: 'app-product-review-section',
  templateUrl: './product-review-section.component.html',
  styleUrls: ['./product-review-section.component.scss']
})
export class ProductReviewSectionComponent implements OnInit {

  @Input() reviews?: Array<ReviewProduct>

  constructor() { }

  ngOnInit(): void {
  }

}
