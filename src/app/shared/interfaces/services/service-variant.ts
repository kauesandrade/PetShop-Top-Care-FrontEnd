import { Service } from './service';

export interface ServiceVariant extends Service {
  variantCode: number;
  variantTitle: string;
  price: number;
}
