import { Contact } from './contact';
import { Order } from '../order/order';
import { Subscription } from '../order/subscription';
import { Card } from '../payment/card';
import { Pet } from '../pet/pet';
import { Address } from './address';

export interface User {
  profileImage: string;
  name: string;
  email: string;
  cpf: string;
  birth: string;
  gender: string;
  password: string;
  contactInfo: [Contact, Contact?];
  addresses: Address[];
  cards: Card[];
  orders: Order[];
  subscriptions: Subscription[];
  pets: Pet[];
  access: string;
}
