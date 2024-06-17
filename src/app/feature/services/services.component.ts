import { Component, OnInit } from '@angular/core';
import { faCat, faDog, faDove } from '@fortawesome/free-solid-svg-icons';
import { Service } from 'src/app/shared/interfaces/services/service';
import { ServicesService } from 'src/app/shared/services/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  serviceList: Service[] = this.services.getServices();

  constructor(private services: ServicesService) {}

  ngOnInit(): void {}
}
