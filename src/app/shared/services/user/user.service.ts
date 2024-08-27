import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import * as userData from '../../../../assets/JsonFiles/users.json';
import { Schedule } from '../../interfaces/schedule/schedule';
import {
  CustomerPasswordRequestPatchDTO,
  CustomerRequestPutDTO,
  CustomerWoImageRequestPutDTO,
  User,
  UserRequestPostDTO,
} from '../../interfaces/user/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { api } from '../api/api';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnChanges {
  loggedUser: User | null = null;
  users: any = userData;
  customerEndpoint = `${api}/customer`;

  constructor(private httpClient: HttpClient) {
    this.getUserById(1).subscribe((data) => {
      this.loggedUser = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.loggedUser);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.customerEndpoint}/1`);
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

    if (this.loggedUser?.fullname) {
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

  register(user: UserRequestPostDTO) {
    return this.httpClient.post(`${this.customerEndpoint}`, user);
  }

  updateUser(user: User) {
    this.loggedUser = user;
    localStorage.setItem('user', JSON.stringify(this.loggedUser));
    console.log(user);
  }

  updateUserRequest(userId: number, user: CustomerRequestPutDTO) {
    let formData = new FormData();

    formData.append('profileImage', user.profileImage);

    let userWoImage: CustomerWoImageRequestPutDTO = {
      fullname: user.fullname,
      cpf: user.cpf,
      birth: user.birth,
      email: user.email,
      gender: user.gender,
      contacts: user.contacts,
      addresses: user.addresses,
    };

    let dto = new Blob([JSON.stringify(userWoImage)], {
      type: 'application/json',
    });
    formData.append('customer', dto);

    formData.forEach((value, key) => {
      console.log(key, value);
    });

    return this.httpClient.put(`${this.customerEndpoint}/${userId}`, formData);
  }

  updatePassword(userId: number, passwords: CustomerPasswordRequestPatchDTO) {
    return this.httpClient.patch(
      `${this.customerEndpoint}/${userId}`,
      passwords
    );
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

  deletePet(id: number) {
    this.loggedUser!.pets = this.loggedUser?.pets?.filter(
      (pet) => pet.id != id
    )!;
    console.log(this.loggedUser!.pets);
  }
}
