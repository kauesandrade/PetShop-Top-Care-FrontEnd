import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedUser: User | null;

  constructor() {
    this.loggedUser = JSON.parse(localStorage.getItem('user') || '""');
  }

  login(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.loggedUser = user;
  }

  logout() {
    localStorage.setItem('user', JSON.stringify({}));
    this.loggedUser = null;
  }
}
