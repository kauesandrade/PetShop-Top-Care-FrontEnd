import { ProductVariant } from './product/product-variant';
import { Subscription } from './subscription';

export interface Items {
  product: ProductVariant;
  amount: number;
  subcription?: Subscription;
}
