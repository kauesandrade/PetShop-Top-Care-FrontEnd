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
  constructor() { }

  getServices(): Service[] {
    return services as Service[];
  }

  getServicesVariants(): ServiceVariant[] {
    return servicesVariants as ServiceVariant[];
  }

  getServicesCategories(): any {
    return servicesCategories.categories;
  }

  getServiceVariants(code: number) {
    let serviceList: Array<ServiceVariant> = []

    serviceVariant.forEach(variant => {
      if (variant.code == code) {
        serviceList.push(variant);
      }
    })

    return serviceList;
  }

  getServicesFirtVariant() {
    let serviceList: Array<ServiceVariant> = []
    
    serviceVariant.forEach(variant => {
      if(!serviceList.includes(this.getServiceVariants(variant.code)[0])){
        serviceList.push(this.getServiceVariants(variant.code)[0]);
      }
    })

    return serviceList;
  }

}
