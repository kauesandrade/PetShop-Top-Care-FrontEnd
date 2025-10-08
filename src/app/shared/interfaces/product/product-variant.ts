import { Image, ImageRequestPost, ImageResponsePutDTO } from './image';
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

export interface ProductVariantResponse {
  variantTitle: string,
  variantCode: number,
  price: number,
  discountPrice: number,
  parcels: number,
  stock: number,
  images: Array<ImageResponsePutDTO>
}

export interface ProductVariantResponsePostDTO {
  variantTitle: string,
  variantCode: number,
  price: number,
  stock: number,
  discount: number,
  images: Array<ImageRequestPost>
}

export interface ProductVariantResponsePutDTO {
  variantId: number,
  variantTitle: string,
  variantCode: number,
  price: number,
  discount: number,
  stock: number,
  images: Array<ImageRequestPost>
}

