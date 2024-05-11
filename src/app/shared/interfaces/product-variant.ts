import { Product } from "./product";

export interface ProductVariant extends Product {
    variantCode: number,
    variant: string,
    images: Array<string>;
    price: number;
    discountPrice: number;
    maxInterestFreeParcels: number;
    subscribersPrice: number;
    available: boolean;
}
