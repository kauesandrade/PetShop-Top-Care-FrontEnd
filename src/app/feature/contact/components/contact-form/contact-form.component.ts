import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DateValidator } from 'src/app/core/validators/date.validator';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { Service } from '../../interfaces/service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  today = this.getTodayDate();

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

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  filials = ['Jaraguá do Sul', 'Blumenau'];

  contactForm = this.formBuilder.group({
    name: ['', [Validators.required, EmptyValidator]],
    email: ['', [Validators.required, Validators.email, EmptyValidator]],
    type: ['', [Validators.required, EmptyValidator]],
    date: [''],
    time: [this.availableHours[0]],
    filial: [''],
    message: ['', [Validators.required, EmptyValidator]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router
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
      this.date?.setValidators([
        Validators.required,
        EmptyValidator,
        DateValidator,
      ]);
      this.time?.setValidators([Validators.required, EmptyValidator]);
      this.filial?.setValidators([Validators.required, EmptyValidator]);
    } else {
      this.date?.clearValidators();
      this.time?.clearValidators();
      this.filial?.clearValidators();
    }

    this.date?.updateValueAndValidity();
    this.time?.updateValueAndValidity();
    this.filial?.updateValueAndValidity();
    this.contactForm?.updateValueAndValidity();
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
    let newService: Service;
    const formValues = this.contactForm.value;

    newService = {
      name: formValues.name!.trim(),
      email: formValues.email!.trim(),
      type: this.defineServiceType(formValues.type),
      message: formValues.message!.trim(),
    };

    if (formValues.type == 'Agendamento') {
      newService.date = new Date(formValues.date!.trim());
      newService.time = formValues.time!.trim();
      newService.filial = formValues.filial!.trim();
    }

    this.contactService.addService(newService);
    this.modal.nativeElement.showModal();
  }

  closeModal() {
    this.modal.nativeElement.close();
    this.router.navigate(['']);
  }

  getTodayDate() {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  }
}
