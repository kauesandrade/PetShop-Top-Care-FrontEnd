import { ShippingStatus } from './shipping-status';
import { ShippingType } from './shipping-type';

export interface Shipping {
  shippingType?: ShippingType;
  shippingBy: string;
  shippingCode: string;
  shippingStatus: Array<ShippingStatus>;
}
