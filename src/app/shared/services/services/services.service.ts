import { Injectable } from '@angular/core';
import services from '../../../../assets/JsonFiles/services.json';
import { Service } from '../../interfaces/services/service';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor() {}

  getServices(): Service[] {
    let serviceList = services as Service[];

    return serviceList;
  }
}
