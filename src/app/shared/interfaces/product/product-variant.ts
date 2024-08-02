import { Image } from './image';
import { Product } from './product';

export interface ProductVariant extends Product {
  variantCode: number;
  variant: string;
  images: Array<Image>;
  price: number;
  discountPrice: number;
  maxInterestFreeParcels: number;
  available: boolean;
}
