import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../../interfaces/contact/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact: Contact = {
    id: null,
    name: '',
    email: '',
    cellphone: '',
    telephone: ''
  };

  constructor(private contactService: ContactService) {}

  addContact(): void {
    this.contactService.createContact(this.contact).subscribe(() => {
      // Handle successful addition
      this.contact = { id: null, name: '', email: '', cellphone: '', telephone: '' };
    });
  }
}
