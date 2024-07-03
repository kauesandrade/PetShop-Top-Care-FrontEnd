import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceVariant } from '../../../../shared/interfaces/services/service-variant';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent implements OnInit {
  @Input() service!: ServiceVariant;

  @Input() serviceSelected?: ServiceVariant[] = [];
  @Output() serviceSelectedChange = new EventEmitter<ServiceVariant[]>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    if (this.serviceSelected?.includes(this.service)) {
      let i = this.serviceSelected.indexOf(this.service);
      this.serviceSelected.splice(i, 1);
      this.serviceSelectedChange.emit(this.serviceSelected);
    } else {
      this.serviceSelected?.push(this.service);
      this.serviceSelectedChange.emit(this.serviceSelected);
    }
  }
}
