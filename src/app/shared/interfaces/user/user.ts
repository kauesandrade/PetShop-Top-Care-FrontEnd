import { Contact, ContactResponseDTO } from './contact';
import { Order } from '../order/order';
import { Card } from '../payment/card';
import { Pet } from '../pet/pet';
import { Address, AddressResponseDTO } from './address';

export interface User {
  id: number;
  profileImage: string;
  fullname: string;
  email: string;
  cpf: string;
  birth: string;
  gender: string;
  password: string;
  contactInfo: [Contact, Contact?];
  addresses: Address[];
  cards: Card[];
  orders: Order[];
  pets: Pet[];
  access: string;
}

export interface UserResponsetDTO {
  id: number;
  profileImage: string;
  fullname: string;
  email: string;
  cpf: string;
  birth: Date;
  gender: string;
  contactInfo: [ContactResponseDTO, ContactResponseDTO?];
  addresses: AddressResponseDTO[];
}

export interface UserRequestPostDTO {
  fullname: string;
  email: string;
  cellphone: string;
  telephone: string;
  cpf: string;
  gender: string;
  birth: string;
  password: string;
  address: Address;
}
