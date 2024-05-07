import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  showPassword = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email, EmptyValidator]],
    password: ['', [Validators.required, EmptyValidator]],
    remember: [false],
  });

  constructor(private formBuilder: FormBuilder) {}

  changePassword() {
    console.log('JAS');
  }

  onSubmit() {
    console.log('JAasS');
  }
}
