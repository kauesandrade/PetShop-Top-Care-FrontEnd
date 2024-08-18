import { BrandResponse } from "./brand-response";
import { ImageResponse } from "./image-response";

export interface ProductResponseCard {
    code: number,
    variantCode: number,
    title: string,
    brand: BrandResponse,
    price: number,
    discountPrice: number,
    parcels: number,
    rating: number,
    image: ImageResponse,
}
