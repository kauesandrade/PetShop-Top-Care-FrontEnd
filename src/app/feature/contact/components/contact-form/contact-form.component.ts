import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Service } from '../../interfaces/service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  serviceTypes = [
    'Compra',
    'Serviço',
    'Dúvida',
    'Sugestão',
    'Reclamação',
    'Agendamento',
  ];

  availableHours = [
    '07:30',
    '08:30',
    '09:30',
    '10:30',
    '11:30',
    '12:30',
    '13:30',
    '14:30',
    '15:30',
    '16:30',
    '17:30',
  ];

  filials = ['Jaraguá do Sul', 'Blumenau'];

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    type: ['', Validators.required],
    date: [''],
    time: [this.availableHours[0]],
    filial: [''],
    message: ['', Validators.required],
  });

  constructor(
    public formBuilder: FormBuilder,
    private contactService: ContactService
  ) {}

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get type() {
    return this.contactForm.get('type');
  }
  get date() {
    return this.contactForm.get('date');
  }
  get time() {
    return this.contactForm.get('time');
  }
  get filial() {
    return this.contactForm.get('filial');
  }
  get message() {
    return this.contactForm.get('message');
  }

  selectedType(e: Event) {
    let select = e.target as HTMLSelectElement;
    this.type?.setValue(select.value, {
      onlySelf: true,
    });

    if (this.type?.value == 'Agendamento') {
      this.date?.setValidators(Validators.required);
      this.time?.setValidators(Validators.required);
      this.filial?.setValidators(Validators.required);
    } else {
      this.date?.clearValidators();
      this.time?.clearValidators();
      this.filial?.clearValidators();
      this.date?.patchValue('');
      this.time?.patchValue(this.availableHours[0]);
      this.filial?.patchValue(this.filials[0]);
    }

    this.date?.updateValueAndValidity();
  }

  isFormValid() {
    return this.contactForm.valid;
  }

  defineServiceType(type: string | null | undefined) {
    switch (type) {
      case 'Compra':
        return 'purchase';
      case 'Serviço':
        return 'service';
      case 'Dúvida':
        return 'question';
      case 'Sugestão':
        return 'suggestion';
      case 'Reclamação':
        return 'complaint';
      case 'Agendamento':
        return 'scheduling';
      default:
        return 'question';
    }
  }

  onSubmit() {
    console.log(this.contactForm.valid);

    if (!this.contactForm.valid) {
      if (!this.contactForm.touched) {
        alert('Tu nem tocou no baguio cara!');
        return;
      }
      alert('Tá com erro aí!');
      return;
    }

    console.log(this.contactForm.errors);
    let newService: Service;
    const formValues = this.contactForm.value;

    newService = {
      name: formValues.name!,
      email: formValues.email!,
      type: this.defineServiceType(formValues.type),
      message: formValues.message!,
    };

    if (formValues.type == 'Agendamento') {
      newService.date = new Date(formValues.date!);
      newService.time = formValues.time!;
      newService.filial = formValues.filial!;
    }

    this.contactService.addService(newService);
    alert('Enviou a mensagem legal dog!');
    console.table(this.contactService.services);
  }
}
