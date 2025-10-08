import {
  staticShippingStatus1,
  staticShippingStatus2,
  staticShippingStatus3,
  staticShippingStatus4,
  staticShippingStatus5,
  staticShippingStatus6,
} from './shipping-status';
import { staticShippingType } from './shipping-type';

export const staticShipping = {
  shippingType: staticShippingType,
  shippingBy: 'Azul',
  shippingCode: '1234567890',
  shippingStatus: [
    staticShippingStatus1,
    staticShippingStatus2,
    staticShippingStatus3,
    staticShippingStatus4,
    staticShippingStatus5,
    staticShippingStatus6,
  ],
};
