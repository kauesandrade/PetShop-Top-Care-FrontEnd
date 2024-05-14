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
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { Address } from '../../interfaces/address';
import { CepService } from '../../services/cep/cep.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.scss'],
})
export class RegisterAddressComponent implements OnChanges {
  @Input() allowClosing = false;
  @Input() title = 'Cadastre seu endereço';

  @Output() registeredAddress = new EventEmitter<Address>();

  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  faX = faTimes;

  states = [
    'Escolha a UF',
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  registerAddressForm = this.formBuilder.group({
    addressName: ['', [Validators.required, EmptyValidator]],
    cep: ['', [Validators.required, EmptyValidator]],
    state: ['', [Validators.required, EmptyValidator]],
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
  get state() {
    return this.registerAddressForm.get('state');
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

  onCancel(e: Event) {
    e.preventDefault();
    this.closeModal();
  }

  closeModal() {
    this.modal.nativeElement.close();
    this.open = false;
    this.openChange.emit(this.open);
    this.registerAddressForm.reset();
    document.body.style.overflow = 'auto';
  }

  searchCep() {
    this.cepService.searchCep(this.cep?.value!).subscribe((res: any) => {
      if (res.erro) {
        this.cep?.setErrors({ cepInvalido: true });
      } else {
        this.state?.setValue(res.uf);
        this.city?.setValue(res.localidade);
        this.neighborhood?.setValue(res.bairro);
        this.street?.setValue(res.logradouro);
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
      state: formValues.state!,
      city: formValues.city!,
      neighborhood: formValues.neighborhood!,
      street: formValues.street!,
      number: parseInt(formValues.number!),
      complement: formValues.complement!,
    };

    this.registeredAddress.emit(address);
    this.closeModal();
  }
}
