import { ShippingStatus } from './shipping-status';

export interface Shipping {
  shippingBy: string;
  shippingCode: string;
  shippingStatus: Array<ShippingStatus>;
}
