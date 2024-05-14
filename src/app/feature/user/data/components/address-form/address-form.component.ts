import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Address } from 'src/app/shared/interfaces/address';
import { CepService } from 'src/app/shared/services/cep/cep.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent {
  @Input() addressForm!: FormGroup;
  @Output() addressFormChange = new EventEmitter<FormGroup>();

  @Output() addedAddress = new EventEmitter<Address>();
  @Output() deletedAddress = new EventEmitter<number>();

  states = [
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

  addressOpen = false;

  faTrash = faTrashAlt;

  constructor(private cepService: CepService) {}

  onInput() {
    console.log(this.getName(0));

    this.addressFormChange.emit(this.addressForm);
  }

  get addresses() {
    return this.addressForm.get('addresses') as FormArray;
  }

  getName(index: number) {
    return (<FormGroup>this.addresses.controls[index]).get('name');
  }
  getCep(index: number) {
    return (<FormGroup>this.addresses.controls[index]).get('cep');
  }
  getState(index: number) {
    return (<FormGroup>this.addresses.controls[index]).get('state');
  }
  getCity(index: number) {
    return (<FormGroup>this.addresses.controls[index]).get('city');
  }
  getNeighborhood(index: number) {
    return (<FormGroup>this.addresses.controls[index]).get('neighborhood');
  }
  getStreet(index: number) {
    return (<FormGroup>this.addresses.controls[index]).get('street');
  }
  getNumber(index: number) {
    return (<FormGroup>this.addresses.controls[index]).get('number');
  }
  getComplement(index: number) {
    return (<FormGroup>this.addresses.controls[index]).get('complement');
  }

  openModal(e: Event) {
    e.preventDefault();
    this.addressOpen = true;
  }

  addAddress(address: Address) {
    this.addressOpen = false;
    this.addedAddress.emit(address);
  }

  deleteAddress(e: Event, i: number) {
    e.preventDefault();
    this.deletedAddress.emit(i);
  }

  searchCep(i: number) {
    this.cepService.searchCep(this.getCep(i)?.value!).subscribe((res: any) => {
      if (res.erro) {
        this.getCep(i)?.setErrors({ cepInvalido: true });
      } else {
        this.getState(i)?.setValue(res.uf);
        this.getCity(i)?.setValue(res.localidade);
        this.getNeighborhood(i)?.setValue(res.bairro);
        this.getStreet(i)?.setValue(res.logradouro);
      }
    });
  }
}
