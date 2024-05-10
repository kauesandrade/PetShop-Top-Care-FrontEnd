import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private userService: UserService) {}

  isLogged(): boolean {
    if (this.userService.loggedUser) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(): boolean {
    return this.isLogged();
  }

  canActivate(): boolean {
    return this.isLogged();
  }
}
