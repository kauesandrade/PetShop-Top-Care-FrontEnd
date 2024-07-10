import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { eachMinuteOfInterval } from 'date-fns';
import { Pet } from '../../interfaces/pet/pet';
import { Petshop } from '../../interfaces/petshop/petshop';
import { Schedule } from '../../interfaces/schedule/schedule';
import { ServiceVariant } from '../../interfaces/services/service-variant';
import { Address } from '../../interfaces/user/address';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class SchedulingService {
  schedulings: Schedule[] = [];

  pet?: Pet;
  address?: Address;
  petshop?: Petshop;
  services?: ServiceVariant[];
  schedule?: Date;

  constructor(private router: Router, private userService: UserService) {
    this.schedulings = this.getSchedulings();
  }

  getSchedulings() {
    if (this.userService.getSchedulings()) {
      return [...this.userService.getSchedulings()];
    }
    return [];
  }

  getScheduling(id: number) {
    for (let scheduling of this.getSchedulings()) {
      if (scheduling.code == id) {
        return scheduling;
      }
    }
    return undefined;
  }

  createSchedule(pet: Pet, schedule: Schedule) {
    let newUser = this.userService.loggedUser!;

    for (let userPet of newUser?.pets!) {
      if (userPet.id == pet.id) {
        userPet.schedules.push(schedule);
      }
    }

    console.log(newUser);

    this.userService.updateUser(newUser);
  }

  cancelSchedule(code: number) {
    this.schedulings = this.schedulings?.filter(
      (schedule) => schedule.code != code
    );
    console.log(this.schedulings);
  }

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

  getUnavailableTimes(selectedDate: Date): Array<Date> {
    return eachMinuteOfInterval(
      {
        start: new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          13,
          30
        ),
        end: new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          15,
          30
        ),
      },
      {
        step: 30,
      }
    );
  }

  getOpenTimes(selectedDate: Date): Array<Date> {
    return eachMinuteOfInterval(
      {
        start: new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          7,
          30
        ),
        end: new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          17
        ),
      },
      {
        step: 30,
      }
    );
  }

  servicesTotalSum() {
    let total = 0;

    if (this.services) {
      for (let service of this.services) {
        total += service.price;
      }
    }

    return total;
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
  setSchedule(datetime: Date) {
    this.schedule = datetime;
  }
}
