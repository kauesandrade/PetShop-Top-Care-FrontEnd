export interface Address {
  name: string;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: number;
  complement?: string;
}

export interface AddressResponseDTO {
  name: string;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: number;
  complement?: string;
}
