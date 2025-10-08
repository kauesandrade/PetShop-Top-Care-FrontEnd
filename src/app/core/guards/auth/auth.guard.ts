import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  isLogged(): boolean {
    if (this.userService.loggedUser?.cpf) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(): boolean {
    return this.isLogged();
  }

  canDeactivate(): boolean {
    if (this.isFunctionary()) {
      return false;
    }
    return true;
  }

  canActivate(
    route: ActivatedRouteSnapshot
    // state: RouterStateSnapshot
  ): boolean {
    if (this.isLogged()) {
      if (this.isFunctionary()) {
        if (route.routeConfig?.path == 'dashboard') {
          return true;
        }
        this.router.navigate(['/dashboard']);
      }
      if (!this.isFunctionary() && route.routeConfig?.path != 'dashboard') {
        return true;
      } else {
        this.router.navigate(['/']);
        // this.router.navigate(['/nao-encontrada']);
      }
    }

    return false;
  }

  private isFunctionary(): boolean {
    if (
      this.userService.loggedUser != null &&
      this.userService.loggedUser?.role != 'CUSTOMER'
    ) {
      return true;
    }
    return false;
  }
}
