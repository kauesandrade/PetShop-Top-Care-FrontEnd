import { Category } from "../search/category";
import { BrandResponse } from "./brand";
import { ImageResponse } from "./image";
import { ProductReview, ProductReviewResponse } from "./product-review";
import { ProductSpecification, ProductSpecificationsResponse } from "./product-specification";
import { ProductVariantResponse } from "./product-variant";
import { ProductCategoryResponse } from "./response/product-category-response";


export interface Product {
  code: number;
  favorite: boolean;
  title: string;
  littleDescription: string;
  description: string;
  brand: string;
  specifications: Array<ProductSpecification>;
  rating: number;
  category: Array<Category>;
  reviews?: Array<ProductReview>;
}

export interface ProductResponseCard {
  code: number,
  variantCode: number,
  title: string,
  brand: BrandResponse,
  price: number,
  discountPrice: number,
  parcels: number,
  rating: number,
  image: ImageResponse,
}

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

export interface ProductResponseSearchPageableDTO{
  productCard: ProductResponseCard,
  categories: Array<ProductCategoryResponse>
}
