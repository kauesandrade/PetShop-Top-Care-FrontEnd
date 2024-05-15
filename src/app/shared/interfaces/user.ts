import { Address } from './address';
import { Card } from './card';
import { Contact } from './contact';

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
}
