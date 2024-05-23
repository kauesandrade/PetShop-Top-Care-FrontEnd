import { PaymentMethod } from './payment-method';

export interface BankSlip {
  slip: string;
  expirationInterval: number;
}
