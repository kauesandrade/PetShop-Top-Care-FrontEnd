import { Component } from '@angular/core';
import { Service } from './interfaces/service';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  services = this.contact.getServices();

  Object = Object;

  constructor(private contact: ContactService) {}

  addService() {
    let testService: Service = {
      name: 'Gabriel',
      email: 'gabriel_baseggio@estudante.sc.senai.br',
      type: 'question',
      message: 'SLA, XD!',
    };
    this.contact.addService(testService);
    console.log(this.contact.getServices());
  }
}
