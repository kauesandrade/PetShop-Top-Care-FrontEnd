import { BrandResponse } from "./brand-response";
import { ProductCategoryResponse } from "./product-category-response";
import { ProductReviewResponse } from "./product-review-response";
import { ProductSpecificationsResponse } from "./product-specifications-response";
import { ProductVariantResponse } from "./product-variant-response";

export interface ProductResponsePage {
    code: number,
    title: string,
    description: string,
    shortDescription: string,
    brand: BrandResponse,
    specifications: Array<ProductSpecificationsResponse>
    rating: number,
    categories: Array<ProductCategoryResponse>,
    reviews: Array<ProductReviewResponse>,
    variants: Array<ProductVariantResponse>
}
