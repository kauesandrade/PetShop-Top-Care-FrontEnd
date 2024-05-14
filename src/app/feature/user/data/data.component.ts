import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DateValidator } from 'src/app/core/validators/date.validator';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  user!: User;

  editingData = false;

  profileForm!: FormGroup;
  contactForm!: FormGroup;
  addressForm = this.formBuilder.group({
    addresses: this.formBuilder.array([]),
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.userService.loggedUser!;
    this.initProfileForm();
    this.initContactForm();
    this.initAddressForm();
    this.disableAllForms();
  }

  initProfileForm() {
    this.profileForm = this.formBuilder.group({
      image: [''],
      name: [this.user.name, [Validators.required, EmptyValidator]],
      email: [
        this.user.email,
        [Validators.required, Validators.email, EmptyValidator],
      ],
      cpf: [this.user.cpf, [Validators.required, EmptyValidator]],
      birth: [
        this.user.birth,
        [
          Validators.required,
          Validators.minLength(8),
          EmptyValidator,
          DateValidator.IsNotBetween('01/02/1950', 'today'),
        ],
      ],
      gender: [this.user.gender, [Validators.required, EmptyValidator]],
    });
  }
  initContactForm() {
    this.contactForm = this.formBuilder.group({
      cellphone1: [
        this.user.contactInfo[0].cellphone,
        [Validators.required, EmptyValidator],
      ],
      cellphone2: [this.user.contactInfo[1]?.cellphone],
      telephone1: [this.user.contactInfo[0].telephone],
      telephone2: [this.user.contactInfo[1]?.telephone],
    });
  }
  initAddressForm() {
    for (let address of this.user.addresses) {
      (<FormArray>this.addressForm.controls.addresses).push(
        this.formBuilder.group({
          name: [address.name, [(Validators.required, EmptyValidator)]],
          cep: [address.cep, [Validators.required, EmptyValidator]],
          state: [address.state, [Validators.required, EmptyValidator]],
          city: [address.city, [Validators.required, EmptyValidator]],
          neighborhood: [
            address.neighborhood,
            [Validators.required, EmptyValidator],
          ],
          street: [address.street, [Validators.required, EmptyValidator]],
          number: [address.number, [Validators.required, EmptyValidator]],
          complement: [address.complement],
        })
      );
    }
  }

  enableEditing() {
    this.editingData = true;
    this.enableAllForms();
  }

  saveData() {
    this.editingData = false;
    this.disableAllForms();
  }

  enableAllForms() {
    this.profileForm.enable();
    this.contactForm.enable();
    this.addressForm.enable();
  }

  disableAllForms() {
    this.profileForm.disable();
    this.contactForm.disable();
    this.addressForm.disable();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  areFormsValid() {
    return (
      this.profileForm.valid && this.contactForm.valid && this.addressForm.valid
    );
  }
}
