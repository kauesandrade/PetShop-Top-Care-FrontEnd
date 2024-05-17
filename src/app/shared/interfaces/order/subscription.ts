import { Payment } from '../payment/payment';
import { ProductVariant } from '../product/product-variant';
import { Item } from './item';

export interface Subscription extends Item {
  interval: string;
  nextShipping: string;
  payment: Payment;
}
