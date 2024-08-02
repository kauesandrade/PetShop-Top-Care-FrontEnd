import { Component, OnChanges, SimpleChanges } from '@angular/core';
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

  openForgotPassword = false;
  openCodeModal = false;
  openChangePassword = false;

  loginForm = this.formBuilder.group({
    login: ['', [Validators.required, EmptyValidator]],
    password: ['', [Validators.required, EmptyValidator]],
    remember: [false],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  get login() {
    return this.loginForm.get('login');
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
  }
  resetLoginError() {
    this.login?.setErrors(null);
    this.password?.setErrors(null);
    console.log(this.login?.errors);
    console.log(this.password?.errors);
  }

  isFormValid() {
    return this.loginForm.valid;
  }

  onSubmit() {
    if (!this.isFormValid()) {
      return;
    }

    const formValues = this.loginForm.value;

    console.log(formValues);

    if (formValues.login?.match('[0-9]{3}.[0-9]{3}.[0-9]{2}')) {
      formValues.login = formValues.login.replace('.', '');
      formValues.login = formValues.login.replace('.', '');
      formValues.login = formValues.login.replace('-', '');
    }

    if (
      this.userService.login(
        formValues.login!,
        formValues.password!,
        formValues.remember!
      )
    ) {

      if(this.userService.loggedUser?.access == "admin"){        
        this.router.navigate(['/dashboard']);
      }else{
        this.router.navigate(['/']);
      }

    } else {
      this.login?.setErrors({ incorrect: true });
      this.password?.setErrors({ incorrect: true });
    }
  }
}
