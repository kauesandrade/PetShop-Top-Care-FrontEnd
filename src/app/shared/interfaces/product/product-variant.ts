export interface ProductVariant {
  variantCode: number;
  variant: string;
  images: Array<string>;
  price: number;
  discountPrice: number;
  maxInterestFreeParcels: number;
  subscribersPrice: number;
  available: boolean;
}
