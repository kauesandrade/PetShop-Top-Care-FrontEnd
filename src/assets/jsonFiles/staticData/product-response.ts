import { ProductResponseCard } from 'src/app/shared/interfaces/product/product';
import { staticBrandResponse } from './brand-response';
import { staticImageResponsePut } from './image-response-put';

export const staticProductResponse: ProductResponseCard = {
  code: 1,
  variantCode: 11,
  title: 'Ração Golden Special',
  brand: staticBrandResponse,
  price: 59.9,
  discountPrice: 51.9,
  parcels: 1,
  rating: 4,
  image: staticImageResponsePut,
};
