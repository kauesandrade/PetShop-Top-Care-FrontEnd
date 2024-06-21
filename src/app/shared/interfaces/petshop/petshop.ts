export interface Petshop {
  id: number;
  image: string;
  name: string;
  address: string;
  openingHours: Array<string>;
  telephone: string;
  offeredServices: Array<string>;
  servedPets: Array<string>;
}
