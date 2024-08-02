import { Address } from '../../interfaces/user/address';

export interface UserRegister {
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
