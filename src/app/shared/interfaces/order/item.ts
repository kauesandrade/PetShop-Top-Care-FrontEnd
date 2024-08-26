import { ProductResponseCard } from '../product/product';
import { ProductVariant } from '../product/product-variant';

export interface Item {
  product: ProductResponseCard;
  amount: number;
}
