import { CustomerReviewResponse } from "./customer-review-response";

export interface ProductReviewResponse {
    customer: CustomerReviewResponse,
    review: string,
    rating: number,
    reviewDate: Date
}
