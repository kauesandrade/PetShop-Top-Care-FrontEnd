import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order/order';
import { Schedule } from 'src/app/shared/interfaces/schedule/schedule';

@Component({
  selector: 'app-finish-information',
  templateUrl: './finish-information.component.html',
  styleUrls: ['./finish-information.component.scss'],
})
export class FinishInformationComponent implements OnInit {
  @Input() type: 'scheduling' | 'cart' = 'cart';
  @Input() orderInformation?: Order;
  @Input() schedulingInformation?: Schedule;

  constructor() {}

  ngOnInit(): void {}

  getValuePayment() {
    if (this.orderInformation?.payment?.method?.value == 'card') {
      return 'Cartão de Crédito';
    }
    if (this.orderInformation?.payment?.method?.value == 'pix') {
      return 'Pix';
    }
    if (this.orderInformation?.payment?.method?.value == 'bankSlip') {
      return 'Boleto';
    }
    return '';
  }
}
