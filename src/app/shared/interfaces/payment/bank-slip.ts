import { PaymentMethod } from './payment-method';

export interface BankSlip extends PaymentMethod {
  slip: string;
  expirationInterval: number;
}
