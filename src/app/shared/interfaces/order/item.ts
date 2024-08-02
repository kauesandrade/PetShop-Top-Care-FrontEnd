import { ProductVariant } from '../product/product-variant';

export interface Item {
  product: ProductVariant;
  amount: number;
}
