import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import * as userData from '../../../../assets/JsonFiles/users.json';
import { Schedule } from '../../interfaces/schedule/schedule';
import { User } from '../../interfaces/user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnChanges {
  loggedUser: User | null;
  users: any = userData;

  constructor() {
    this.loggedUser = JSON.parse(localStorage.getItem('user') || '""');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.loggedUser);
  }

  getSchedulings() {
    let schedulings: Schedule[] = [];
    if (this.loggedUser?.pets) {
      for (let pet of this.loggedUser?.pets) {
        for (let scheduling of pet.schedules) {
          schedulings.push(scheduling);
        }
      }
    }
    return schedulings;
  }

  mainCard() {
    if (this.loggedUser?.cards) {
      for (let card of this.loggedUser?.cards) {
        if (card.mainCard) {
          return card;
        }
      }
    }
    return null;
  }

  login(login: string, password: string, remember: boolean): boolean {
    console.log(this.users.user);
    console.log(login);
    console.log(password);

    for (const user of this.users.user) {
      if (user.cpf == login || user.email == login) {
        if (user.password == password) {
          this.loggedUser = user;
          break;
        }
      }
    }

    if (this.loggedUser?.name) {
      console.log(this.loggedUser);
      if (remember) {
        localStorage.setItem('user', JSON.stringify(this.loggedUser));
      }
      return true;
    }

    return false;
  }

  logout() {
    localStorage.setItem('user', JSON.stringify({}));
    this.loggedUser = null;
  }

  register(user: User) {
    console.log(user);
  }

  updateUser(user: User) {
    this.loggedUser = user;
    localStorage.setItem('user', JSON.stringify(this.loggedUser));
    console.log(user);
  }

  getPetById(id: number) {
    if (this.loggedUser?.pets?.length == 0) {
      return null;
    }

    for (let pet of this.loggedUser?.pets!) {
      if (pet.id == id) {
        return pet;
      }
    }

    return null;
  }

  deletePet(id: number){
    this.loggedUser!.pets = this.loggedUser?.pets?.filter((pet) => pet.id != id)!;
    console.log(this.loggedUser!.pets);
  }
}
