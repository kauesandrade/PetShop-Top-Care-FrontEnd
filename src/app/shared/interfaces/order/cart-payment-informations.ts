import { ShippingType } from '../shipping/shipping-type';
import { Address } from '../user/address';

export interface CartPaymentInformations {
  partialPrice?: number;
  amountItens?: number;
  discountPrice?: number;
  parcelsPrice?: number;
  parcelsNumber?: number;
  totalPrice?: number;
  shippingType?: ShippingType;
  address?: Address;
}
