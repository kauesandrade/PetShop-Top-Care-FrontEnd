import { Payment } from '../payment/payment';
import { ProductVariant } from '../product/product-variant';
import { Item } from './item';

export interface Subscription extends Item {
  subscriptionCode: number;
  interval: string;
  nextShipping: string;
  payment: Payment;
}
