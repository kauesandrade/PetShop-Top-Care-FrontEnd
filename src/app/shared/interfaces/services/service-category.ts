import { ServiceVariant } from './service-variant';

export interface ServiceCategory {
  category: string;
  services: Array<ServiceVariant>;
}
