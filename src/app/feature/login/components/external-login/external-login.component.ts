import { Component } from '@angular/core';
import {
  faApple,
  faFacebookF,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-external-login',
  templateUrl: './external-login.component.html',
  styleUrls: ['./external-login.component.scss'],
})
export class ExternalLoginComponent {
  faGoogle = faGoogle;
  faFacebook = faFacebookF;
  faApple = faApple;

  constructor() {}
}
