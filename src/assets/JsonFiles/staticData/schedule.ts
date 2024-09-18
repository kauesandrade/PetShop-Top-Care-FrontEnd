import { staticDatetime } from './datetime';
import { staticPayment } from './payment';
import { staticPetshop } from './petshop';
import { staticServiceVariant } from './service-variant';

export const staticSchedule = {
  code: 1,
  dateTime: staticDatetime,
  services: [staticServiceVariant],
  petshop: staticPetshop,
  payment: staticPayment,
};
