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
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { api } from '../api/api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnChanges {
  loggedUser: User | null = null;
  changePasswordUser: any | null = null;
  users: any = userData;
  customerEndpoint = `${api}/customer`;
  userEndpoint = `${api}/user`;

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.updateLoggedUser();
  }

  updateLoggedUser() {
    if (localStorage.getItem('user') && this.loggedUser == null) {
      this.loggedUser = JSON.parse(localStorage.getItem('user')!) || null;
    }
    if (this.loggedUser != null && this.loggedUser.role != 'CUSTOMER') {
      this.router.navigate(['/dashboard']);
    }
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.customerEndpoint}/${id}`);
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

  login(
    login: string,
    password: string,
    remember: boolean
  ): Observable<boolean> {
    let validLogin: Subject<boolean> = new Subject<boolean>();
    let loginData = {
      email: login,
      password: password,
    };
    this.httpClient.post(this.userEndpoint, loginData).subscribe({
      next: (user) => {
        this.loggedUser = user as User;
        console.log(this.loggedUser);

        if (this.loggedUser?.fullname) {
          if (remember) {
            localStorage.setItem('user', JSON.stringify(this.loggedUser));
          }
          validLogin.next(true);
        }
      },
      error: () => {
        validLogin.next(false);
      },
    });
    return validLogin.asObservable();
  }

  logout() {
    localStorage.setItem('user', '');
    this.loggedUser = null;
    this.updateLoggedUser();
    console.log(this.loggedUser);
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

  changePassword(password: string) {
    return this.httpClient.patch(
      `http://localhost:8088/topcare/user/forgotPassword/
    ${this.changePasswordUser.id}`,
      { newPassword: password }
    );
  }

  verifyEmail(email: string) {
    return this.httpClient.post(
      'http://localhost:8088/topcare/user/forgotPassword',
      { email: email }
    );
  }

  getCodeRequest() {
    return this.httpClient.get(
      'http://localhost:8088/topcare/user/forgotPassword/code'
    );
  }
}
