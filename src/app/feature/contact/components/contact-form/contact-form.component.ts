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

  get type() {
    return this.contactForm.get('type');
  }

  selectedType(e: Event) {
    let select = e.target as HTMLSelectElement;
    this.type?.setValue(select.value, {
      onlySelf: true,
    });

    if (this.type?.value == 'Agendamento') {
      this.contactForm.controls.date.setValidators(Validators.required);
      this.contactForm.controls.time.setValidators(Validators.required);
      this.contactForm.controls.filial.setValidators(Validators.required);
    } else {
      this.contactForm.controls.date.reset();
      this.contactForm.controls.time.setValue(this.availableHours[0]);
      this.contactForm.controls.filial.setValue(this.filials[0]);
      this.contactForm.controls.date.removeValidators(Validators.required);
      this.contactForm.controls.time.removeValidators(Validators.required);
      this.contactForm.controls.filial.removeValidators(Validators.required);
    }
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

    let newService: Service = {
      name: this.contactForm.value.name!,
      email: this.contactForm.value.email!,
      type: this.defineServiceType(this.contactForm.value.type),
      date: new Date(this.contactForm.value.date!),
      time: this.contactForm.value.time!,
      filial: this.contactForm.value.filial!,
      message: this.contactForm.value.message!,
    };

    this.contactService.addService(newService);
    alert('Enviou a mensagem legal dog!');
  }
}
