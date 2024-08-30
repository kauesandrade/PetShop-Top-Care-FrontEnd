import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
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
    login: ['', [Validators.required, Validators.email, EmptyValidator]],
    password: ['', [Validators.required, EmptyValidator]],
    remember: [false],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
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
    if (
      this.login?.getError('incorrect') ||
      this.password?.getError('incorrect')
    ) {
      this.login?.setErrors(null);
      this.password?.setErrors(null);
    }
  }

  isFormValid() {
    return this.loginForm.valid;
  }

  onSubmit() {
    if (!this.isFormValid()) {
      return;
    }

    const formValues = this.loginForm.value;

    this.userService
      .login(formValues.login!, formValues.password!, formValues.remember!)
      .subscribe((validLogin) => {
        if (validLogin) {
          this.messageService.add({
            severity: 'success',
            summary: 'Login efetuado com sucesso',
            closable: true,
            life: 1500,
          });
          if (this.userService.loggedUser?.role != 'CUSTOMER') {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/']);
          }
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Dados de login incorretos',
            closable: true,
            life: 1500,
          });
          this.login?.setErrors({ incorrect: true });
          this.password?.setErrors({ incorrect: true });
        }
      });
  }
}
