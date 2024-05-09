import { TypeProduct } from './type-product';

export interface Product {
  images: Array<string>;
  favorite: boolean;
  title: string;
  littleDescription: string,
  description: string,
  brand: string;
  rating: number;
  price: number;
  discountPrice: number;
  maxInterestFreeParcels: number;
  subscribersPrice: number;
  available: boolean;
  category: Array<string>;
  type: Array<TypeProduct>;
}
