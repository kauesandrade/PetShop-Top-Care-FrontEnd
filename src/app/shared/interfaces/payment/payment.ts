import { BankSlip } from './bank-slip';
import { Card } from './card';
import { Pix } from './pix';

export interface Payment {
  subtotal: number;
  shippingFee: number;
  total: number;
  method: Card | BankSlip | Pix;
  parcels: number;
  status: string;
}
