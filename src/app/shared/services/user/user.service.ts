import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import * as userData from '../../../../assets/JsonFiles/users.json';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedUser: User | null;
  users: any = userData;

  constructor() {
    this.loggedUser = JSON.parse(localStorage.getItem('user') || '""');
  }

  login(login: string, password: string) {
    for (const user of this.users.user) {
      if (user.cpf == login || user.email == login) {
        if (user.password == password) {
          this.loggedUser = user;
          break;
        }
      }
    }

    localStorage.setItem('user', JSON.stringify(this.loggedUser));
    console.log(this.loggedUser);
  }

  logout() {
    localStorage.setItem('user', JSON.stringify({}));
    this.loggedUser = null;
  }

  register(user: User) {
    console.log(user);
  }
}
