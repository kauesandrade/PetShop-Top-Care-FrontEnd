import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { UserService } from 'src/app/shared/services/user/user.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get remember() {
    return this.loginForm.get('remember');
  }

  changeShowPassword(event: Event) {
    event.preventDefault();
    this.showPassword = !this.showPassword;
    console.log(this.email?.errors);
  }

  changePassword() {
    console.log('JAS');
  }

  isFormValid() {
    return this.loginForm.valid;
  }

  onSubmit() {
    const formValues = this.loginForm.value;

    console.log(formValues);

    if (
      this.userService.login(
        formValues.email!,
        formValues.password!,
        formValues.remember!
      )
    ) {
      this.router.navigate(['/']);
    } else {
      this.email?.setErrors({ incorrect: true });
      this.password?.setErrors({ incorrect: true });
    }
  }
}
