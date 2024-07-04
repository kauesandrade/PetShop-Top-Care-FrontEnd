import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceVariant } from '../../../../shared/interfaces/services/service-variant';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent implements OnInit {
  @Input() service!: ServiceVariant;

  @Input() servicesSelected?: ServiceVariant[] = [];
  @Output() servicesSelectedChange = new EventEmitter<ServiceVariant[]>();

  constructor() {}

  ngOnInit(): void {}

  isServiceSelected() {
    if (this.servicesSelected) {
      for (let service of this.servicesSelected) {
        if (service == this.service) {
          return true;
        }
      }
    }
    return false;
  }

  onClick() {
    if (this.servicesSelected?.includes(this.service)) {
      let i = this.servicesSelected.indexOf(this.service);
      this.servicesSelected.splice(i, 1);
      this.servicesSelectedChange.emit(this.servicesSelected);
    } else {
      this.servicesSelected?.push(this.service);
      this.servicesSelectedChange.emit(this.servicesSelected);
    }
  }
}
