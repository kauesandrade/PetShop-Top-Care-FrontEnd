import { Injectable } from '@angular/core';
import services from '../../../../assets/JsonFiles/services.json';
import servicesVariants from '../../../../assets/JsonFiles/servicesVariants.json';
import servicesCategories from '../../../../assets/JsonFiles/servicesCategories.json';
import { Service } from '../../interfaces/services/service';
import { ServiceVariant } from '../../interfaces/services/service-variant';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor() {}

  getServices(): Service[] {
    return services as Service[];
  }

  getServicesVariants(): ServiceVariant[] {
    return servicesVariants as ServiceVariant[];
  }

  getServicesCategories(): any {
    return servicesCategories.categories;
  }
}
