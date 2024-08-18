import { ProductVariant } from '../product/product-variant';
import { ProductResponseCard } from '../product/response/product-response-card';

export interface Item {
  product: ProductResponseCard;
  amount: number;
}
