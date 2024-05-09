import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  genders = ['Escolha seu sexo', 'Masculino', 'Feminino', 'Outro'];

  showPassword = false;
  showPasswordConf = false;

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  registerForm = this.formBuilder.group({
    name: ['', [Validators.required, EmptyValidator]],
    email: ['', [Validators.required, Validators.email, EmptyValidator]],
    cellphone: ['', [Validators.required, EmptyValidator]],
    telephone: [''],
    cpf: ['', [Validators.required, EmptyValidator]],
    gender: ['', [Validators.required, EmptyValidator]],
    birth: ['', [Validators.required, Validators.minLength(8), EmptyValidator]],
    password: ['', [Validators.required, EmptyValidator]],
    passwordConf: ['', [Validators.required, EmptyValidator]],
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get cellphone() {
    return this.registerForm.get('cellphone');
  }
  get telephone() {
    return this.registerForm.get('telephone');
  }
  get cpf() {
    return this.registerForm.get('cpf');
  }
  get gender() {
    return this.registerForm.get('gender');
  }
  get birth() {
    return this.registerForm.get('birth');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get passwordConf() {
    return this.registerForm.get('passwordConf');
  }

  changeShowPassword(event: Event) {
    event.preventDefault();
    this.showPassword = !this.showPassword;
  }

  changeShowPasswordConf(event: Event) {
    event.preventDefault();
    this.showPasswordConf = !this.showPasswordConf;
  }

  validatePassword() {
    let passwordValue = this.password?.value!;
    console.log(passwordValue);

    if (passwordValue.length < 8) {
      this.password?.setErrors({ length: true });
    }
    if (!/\d/.test(passwordValue)) {
      this.password?.setErrors({ number: true });
    }
    if (!/[a-z]/.test(passwordValue)) {
      this.password?.setErrors({ lowercase: true });
    }
    if (!/[A-Z]/.test(passwordValue)) {
      this.password?.setErrors({ uppercase: true });
    }
  }

  checkConfirmation() {
    let passwordValue = this.password?.value!;
    let passwordConfValue = this.passwordConf?.value!;
    console.log(passwordValue);
    console.log(passwordConfValue);

    if (passwordValue != passwordConfValue) {
      this.passwordConf?.setErrors({ notEqual: true });
    }
  }

  openTerms(event: Event) {
    event.preventDefault();
    this.router.navigate([]).then((res) => {
      window.open('/', '_blank');
    });
  }

  isFormValid() {
    console.log(this.birth?.errors);

    return this.registerForm.valid;
  }

  onSubmit() {}
}
