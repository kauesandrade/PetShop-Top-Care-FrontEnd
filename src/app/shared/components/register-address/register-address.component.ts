import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { Address } from '../../interfaces/address';
import { CepService } from '../../services/cep/cep.service';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.scss'],
})
export class RegisterAddressComponent implements OnChanges {
  @Input() open = false;
  @Input() title = 'Cadastre seu endereço';

  @Output() registeredAddress = new EventEmitter<Address>();

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  registerAddressForm = this.formBuilder.group({
    addressName: ['', [Validators.required, EmptyValidator]],
    cep: ['', [Validators.required, EmptyValidator]],
    city: ['', [Validators.required, EmptyValidator]],
    neighborhood: ['', [Validators.required, EmptyValidator]],
    street: ['', [Validators.required, EmptyValidator]],
    number: ['', [Validators.required]],
    complement: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private cepService: CepService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen();
  }

  get addressName() {
    return this.registerAddressForm.get('addressName');
  }
  get cep() {
    return this.registerAddressForm.get('cep');
  }
  get city() {
    return this.registerAddressForm.get('city');
  }
  get neighborhood() {
    return this.registerAddressForm.get('neighborhood');
  }
  get street() {
    return this.registerAddressForm.get('street');
  }
  get number() {
    return this.registerAddressForm.get('number');
  }
  get complement() {
    return this.registerAddressForm.get('complement');
  }

  isOpen() {
    if (this.open) {
      document.body.style.overflow = 'hidden';
      this.modal.nativeElement.showModal();
    }
  }

  searchCep() {
    this.cepService.searchCep(this.cep?.value!).subscribe((res: any) => {
      if (res.erro) {
        this.cep?.setErrors({ cepInvalido: true });
      }
    });
  }

  isFormValid() {
    return this.registerAddressForm.valid;
  }

  onSubmit() {
    let formValues = this.registerAddressForm.value;

    let address: Address = {
      name: formValues.addressName!,
      cep: formValues.cep!,
      city: formValues.city!,
      neighborhood: formValues.neighborhood!,
      street: formValues.street!,
      number: parseInt(formValues.number!),
      complement: formValues.complement!,
    };

    this.registeredAddress.emit(address);
    this.modal.nativeElement.close();
  }
}
