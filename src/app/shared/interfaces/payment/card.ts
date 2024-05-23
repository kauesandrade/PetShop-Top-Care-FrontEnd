import { PaymentMethod } from './payment-method';

export interface Card {
  name: string;
  lastDigits: string;
  expirationDate: string;
  mainCard: boolean;
}
