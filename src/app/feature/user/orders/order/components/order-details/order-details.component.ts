import { Component, Input, OnInit } from '@angular/core';
import { Payment } from 'src/app/shared/interfaces/payment/payment';
import { Address } from 'src/app/shared/interfaces/user/address';
import { BankSlip } from 'src/app/shared/interfaces/payment/bank-slip';
import { Card } from 'src/app/shared/interfaces/payment/card';
import { Pix } from 'src/app/shared/interfaces/payment/pix';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  @Input() details!: {
    address: Address;
    payment: Payment;
    expectedDate: string;
    numberOfItems: number;
  };

  address!: Address;
  payment!: Payment;

  constructor() {}

  ngOnInit(): void {
    this.address = this.details.address;
    this.payment = this.details.payment;
  }

  paymentMethodText() {
    if (this.payment.method.value == 'card') {
      return `Cartão final ${(this.payment.method as Card).lastDigits}`;
    } else if (this.payment.method.value == 'pix') {
      return `Pix`;
    }
    return `Boleto`;
  }
}
