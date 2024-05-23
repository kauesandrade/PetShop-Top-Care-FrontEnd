import { Component, EventEmitter, Output } from '@angular/core';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';

@Component({
  selector: 'app-payment-layout',
  templateUrl: './payment-layout.component.html',
  styleUrls: ['./payment-layout.component.scss'],
})
export class PaymentLayoutComponent {
  page: string = 'card';

  constructor(private paymentService: PaymentService) {}

  updatePage(page: string) {
    this.page = page;
    this.paymentService.setPaymentMethod({ value: this.page });
  }
}
