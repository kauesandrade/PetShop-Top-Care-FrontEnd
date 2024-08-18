import { Component, Input, OnInit } from '@angular/core';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { ProductReview } from 'src/app/shared/interfaces/product/product-review';
import { ProductReviewResponse } from 'src/app/shared/interfaces/product/response/product-review-response';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'],
})
export class ProductReviewComponent implements OnInit {
  faStarSolid = faStarSolid;
  faStarRegular = faStarRegular;

  @Input() review!: ProductReviewResponse;
  starsValue: Array<boolean> = new Array<boolean>(5);

  constructor() {}

  ngOnInit(): void {
    this.setStarsValue();
  }

  setStarsValue() {
    for (let i = 0; i < 5; i++) {
      i < this.review.rating
        ? (this.starsValue[i] = true)
        : (this.starsValue[i] = false);
    }
  }
}
