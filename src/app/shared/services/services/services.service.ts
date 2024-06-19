import { Injectable } from '@angular/core';
import services from '../../../../assets/JsonFiles/services.json';
import serviceVariant from '../../../../assets/JsonFiles/serviceVariant.json';
import { Service } from '../../interfaces/services/service';
import { ServiceVariant } from '../../interfaces/services/service-variant';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor() { }

  getServices(): Service[] {
    let serviceList = services as Service[];

    return serviceList;
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
