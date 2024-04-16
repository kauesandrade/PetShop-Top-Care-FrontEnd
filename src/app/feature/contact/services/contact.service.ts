import { Injectable } from '@angular/core';
import { Service } from '../interfaces/service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  services = {
    purchase: new Array<Service>(),
    service: new Array<Service>(),
    question: new Array<Service>(),
    suggestion: new Array<Service>(),
    complaint: new Array<Service>(),
    scheduling: new Array<Service>(),
  };

  constructor() {}

  getServices() {
    return this.services;
  }

  getServicesOfType(type: string) {
    return this.services[type as keyof typeof this.services];
  }

  addService(service: Service) {
    let serviceArray =
      this.services[service.type as keyof typeof this.services];

    serviceArray.push(service);
  }
}
