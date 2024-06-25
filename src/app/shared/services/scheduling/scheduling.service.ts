import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../../interfaces/pet/pet';
import { Petshop } from '../../interfaces/petshop/petshop';
import { Service } from '../../interfaces/services/service';
import { ServiceVariant } from '../../interfaces/services/service-variant';
import { Address } from '../../interfaces/user/address';

@Injectable({
  providedIn: 'root',
})
export class SchedulingService {
  pet?: Pet;
  address?: Address;
  petshop?: Petshop;
  services?: ServiceVariant[];
  schedule?: string;

  constructor(private router: Router) {}

  clearScheduling() {
    this.pet = undefined;
    this.address = undefined;
    this.petshop = undefined;
    this.services = undefined;
    this.schedule = undefined;
  }

  cancelScheduling() {
    this.clearScheduling();
    this.router.navigate(['/servicos']);
  }

  navigateToNextRoute() {
    let url = this.router.url.split('/agendamento/').join('');
    let routes = [
      'pet',
      'localizacao',
      'petshop',
      'servicos',
      'horario',
      'confirmacao',
    ];
    let index = routes.indexOf(url);
    this.router.navigate(['/agendamento/' + routes[index + 1]]);
  }

  setPet(pet: Pet) {
    this.pet = pet;
  }
  setAddress(address: Address) {
    this.address = address;
  }
  setPetshop(petshop: Petshop) {
    this.petshop = petshop;
  }
  setServices(services: Array<ServiceVariant>) {
    this.services = services;
  }
}
