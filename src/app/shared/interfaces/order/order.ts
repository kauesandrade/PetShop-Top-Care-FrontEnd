import { Address } from './user/address';
import { Items } from './items';
import { Shipping } from './shipping/shipping';
import { User } from './user/user';
import { Payment } from './payment/payment';

export interface Order {
  user: User;
  orderCode: number;
  itens: Array<Items>;
  address: Address;
  expectedDate: string;
  payment: Payment;

  orderDate: string;
  status: string;
  shipping: Shipping;
}
