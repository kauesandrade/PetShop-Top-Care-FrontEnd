import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-payment-layout',
  templateUrl: './payment-layout.component.html',
  styleUrls: ['./payment-layout.component.scss'],
})
export class PaymentLayoutComponent {
  page: string = 'Cartão';
  @Output() paymentMethod = new EventEmitter<string>();

  constructor() {}

  updatePage(page: string) {
    this.page = page;
    this.paymentMethod.emit(this.page);
  }
}
