import { CustomerReviewResponse } from './response/customer-review-response';
export interface ProductReview {
  user: string;
  icon: string;
  title: string;
  review: string;
  rating: number;
  image: string;
  datePost: string;
}
export interface ProductReviewResponse {
    customer: CustomerReviewResponse,
    review: string,
    rating: number,
    reviewDate: Date
}