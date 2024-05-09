import { Address } from './address';
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
}
