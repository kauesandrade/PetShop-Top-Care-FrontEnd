import { Payment } from '../payment/payment';
import { Shipping } from '../shipping/shipping';
import { Address } from '../user/address';
import { User } from '../user/user';
import { Item } from './item';

export interface Order {
  user: User;
  orderCode: number;
  itens: Array<Item>;
  address: Address;
  expectedDate: string;
  payment: Payment;

  orderDate: string;
  status: string;
  shipping: Shipping;
}
