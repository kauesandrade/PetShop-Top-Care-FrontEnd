import { Payment } from '../payment/payment';
import { Petshop } from '../petshop/petshop';
import { ServiceVariant } from '../services/service-variant';

export interface Schedule {
  code: number;
  dateTime: string;
  services: ServiceVariant[];
  petshop: Petshop;
  payment: Payment;
}
