import { Injectable } from '@angular/core';
import { ProductReview } from '../../interfaces/product/product-review';
import { Product } from '../../interfaces/product/product';
import { ProductVariant } from '../../interfaces/product/product-variant';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor() {}

  addReview(review: ProductReview, product: ProductVariant) {
    if (product.reviews) {
      product.reviews.push(review);
    } else {
      product.reviews = [review];
    }
    console.log(product.reviews);
  }
}
