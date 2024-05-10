import { ReviewProduct } from './review-product';
import { SpecificationProduct } from './specification-product';
import { TypeProduct } from './type-product';

export interface Product {
  images: Array<string>;
  favorite: boolean;
  title: string;
  littleDescription: string,
  description: string,
  specifications: Array<SpecificationProduct> 
  brand: string;
  rating: number;
  price: number;
  discountPrice: number;
  maxInterestFreeParcels: number;
  subscribersPrice: number;
  available: boolean;
  category: Array<string>;
  reviews?: Array<ReviewProduct>;
  type: Array<TypeProduct>;
}
