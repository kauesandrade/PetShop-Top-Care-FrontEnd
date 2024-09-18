import { staticPayment } from './payment';
import { staticItem } from './item';
import { staticAddress } from './address';
import { staticShipping } from './shipping';

export const staticOrder = {
  orderCode: 1,
  items: [staticItem],
  address: staticAddress,
  expectedDate: '15/09/2024',
  payment: staticPayment,
  orderDate: '10/09/2024',
  status: 'Entregue',
  shipping: staticShipping,
};
