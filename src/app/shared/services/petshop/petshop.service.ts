import { Injectable } from '@angular/core';
import { Petshop } from '../../interfaces/petshop/petshop';
import petshops from '../../../../assets/JsonFiles/petshops.json';

@Injectable({
  providedIn: 'root',
})
export class PetshopService {
  constructor() {}

  getPetshops(): Array<Petshop> {
    let petshopList = petshops as Petshop[];

    return petshopList;
  }
}
