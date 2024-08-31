import { Category } from "../search/category";
import { BrandResponse } from "./brand";
import { ImageResponse } from "./image";
import { ProductReview, ProductReviewResponse } from "./product-review";
import { ProductSpecification, ProductSpecificationsResponse } from "./product-specification";
import { ProductVariantResponse, ProductVariantResponseEditDTO } from "./product-variant";
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

export interface ProductResponsePageDTO {
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

export interface ProductResponsePageEditDTO {
  code: number,
  title: string,
  description: string,
  shortDescription: string,
  brand: BrandResponse,
  specifications: Array<ProductSpecificationsResponse>
  categories: Array<ProductCategoryResponse>,
  variants: Array<ProductVariantResponseEditDTO>
}

// export interface ProductResponseEditDTO{
//   code: number,
//   title: string,
//   description: string,
//   shortDescription: string,
//   brand: BrandResponse,
//   specifications: Array<ProductSpecificationsResponse>
//   rating: number,
//   categories: Array<ProductCategoryResponse>,
//   reviews: Array<ProductReviewResponse>,
//   variants: Array<ProductVariantResponse>
// }

export interface ProductRequestEditDTO{
  title: string,
  description: string,
  shortDescription: string,
  idBrand: number,
  specifications: Array<ProductSpecificationsResponse>
  idsCategories: Array<number>,
  variants: Array<ProductVariantResponseEditDTO>
}

export interface ProductRequestCreateDTO{
  code: number,
  title: string,
  description: string,
  shortDescription: string,
  idBrand: number,
  specifications: Array<ProductSpecificationsResponse>
  idsCategories: Array<number>,
  variants: Array<ProductVariantResponseEditDTO>
}

export interface ProductResponseSearchPageableDTO{
  productCard: ProductResponseCard,
  categories: Array<ProductCategoryResponse>
}
