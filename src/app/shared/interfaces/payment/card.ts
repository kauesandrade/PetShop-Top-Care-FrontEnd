import { PaymentMethod } from './payment-method';

export interface Card extends PaymentMethod {
  name: string;
  lastDigits: string;
  expirationDate: string;
  mainCard: boolean;
}
