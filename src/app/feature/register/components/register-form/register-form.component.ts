import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { PasswordValidator } from 'src/app/core/validators/password.validator';
import { Order } from 'src/app/shared/interfaces/order/order';
import { Subscription } from 'src/app/shared/interfaces/order/subscription';
import { Card } from 'src/app/shared/interfaces/payment/card';
import { Pet } from 'src/app/shared/interfaces/pet/pet';
import { Address } from 'src/app/shared/interfaces/user/address';
import { User } from 'src/app/shared/interfaces/user/user';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  genders = ['Escolha seu sexo', 'Masculino', 'Feminino', 'Outro'];

  openModal = false;

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
    password: ['', [Validators.required, EmptyValidator, PasswordValidator]],
    passwordConf: ['', [Validators.required, EmptyValidator]],
    terms: [false, [Validators.requiredTrue]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

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

  checkConfirmation() {
    let passwordValue = this.password?.value!;
    let passwordConfValue = this.passwordConf?.value!;

    if (
      passwordValue &&
      passwordConfValue &&
      passwordValue != passwordConfValue
    ) {
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
    return this.registerForm.valid;
  }

  onSubmit() {
    this.openModal = true;
  }

  registerUser(address: Address) {
    let formValues = this.registerForm.value;

    let user: User = {
      id: 1!,
      profileImage: '',
      name: formValues.name!,
      email: formValues.email!,
      cpf: formValues.cpf!,
      birth: formValues.birth!,
      gender: formValues.gender!,
      password: formValues.password!,
      contactInfo: [
        { cellphone: formValues.cellphone!, telephone: formValues.telephone! },
      ],
      addresses: [address],
      cards: new Array<Card>(),
      orders: new Array<Order>(),
      subscriptions: new Array<Subscription>(),
      pets: new Array<Pet>(),
      access: 'normal',
    };

    this.userService.register(user);
    this.router.navigate(['/login']);
  }
}
