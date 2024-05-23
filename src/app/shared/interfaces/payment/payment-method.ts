import { BankSlip } from './bank-slip';
import { Card } from './card';
import { Pix } from './pix';

export interface PaymentMethod {
  value: string;
  card?: Card;
  pix?: Pix;
  bankSlip?: BankSlip;
}
