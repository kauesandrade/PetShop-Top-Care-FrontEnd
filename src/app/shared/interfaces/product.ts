import { CategoryProduct } from './category-product';
import { ReviewProduct } from './review-product';
import { SpecificationProduct } from './specification-product';

export interface Product {
  code: number;
  favorite: boolean;
  title: string;
  littleDescription: string,
  description: string,
  brand: string;
  specifications: Array<SpecificationProduct>; 
  rating: number;
  category: Array<CategoryProduct>;
  reviews?: Array<ReviewProduct>;
}
