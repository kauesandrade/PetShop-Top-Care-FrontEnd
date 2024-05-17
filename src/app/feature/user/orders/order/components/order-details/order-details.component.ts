import { Component, Input, OnInit } from '@angular/core';
import { Payment } from 'src/app/shared/interfaces/payment/payment';
import { Address } from 'src/app/shared/interfaces/user/address';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  @Input() details!: {
    address: Address;
    payment: Payment;
  };

  constructor() {}

  ngOnInit(): void {}
}
