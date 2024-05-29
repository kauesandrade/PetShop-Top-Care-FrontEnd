import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import * as userData from '../../../../assets/JsonFiles/users.json';
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
}
