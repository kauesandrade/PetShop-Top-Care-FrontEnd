import { ProductVariant } from '../product/product-variant';
import { Subscription } from './subscription';

export interface Item {
  product: ProductVariant;
  amount: number;
}
