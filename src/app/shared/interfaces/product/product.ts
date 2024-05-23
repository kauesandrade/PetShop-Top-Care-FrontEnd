import { Category } from '../search/category';
import { ProductReview } from './product-review';
import { ProductSpecification } from './product-specification';

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
