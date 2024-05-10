import { Address } from './address';
import { Contact } from './contact';

export interface User {
  profileIcon: string;
  name: string;
  email: string;
  cpf: string;
  birth: string;
  gender: string;
  password: string;
  contactInfo: [Contact, Contact];
  addresses: Address[];
}
