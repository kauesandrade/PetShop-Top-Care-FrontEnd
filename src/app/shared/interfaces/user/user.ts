import { Address } from './address';
import { Card } from './card';
import { Contact } from './contact';
import { Order } from './order';
import { Subscription } from './subscription';

export interface User {
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
}
