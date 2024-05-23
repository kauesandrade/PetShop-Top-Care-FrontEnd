import { PaymentMethod } from './payment-method';

export interface Payment {
  subtotal: number;
  shippingFee: number;
  total: number;
  method: PaymentMethod;
  parcels: number;
  status: string;
}
