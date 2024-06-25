import { Payment } from '../payment/payment';
import { Pet } from '../pet/pet';
import { Petshop } from '../petshop/petshop';
import { ServiceVariant } from '../services/service-variant';
import { User } from '../user/user';

export interface Schedule {
  code: string;
  user: User;
  pet: Pet;
  dateTime: string;
  services: ServiceVariant[];
  petshop: Petshop;
  payment: Payment;
}
