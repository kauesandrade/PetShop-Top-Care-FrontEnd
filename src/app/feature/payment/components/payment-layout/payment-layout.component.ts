import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-payment-layout',
  templateUrl: './payment-layout.component.html',
  styleUrls: ['./payment-layout.component.scss'],
})
export class PaymentLayoutComponent implements OnInit {
  page: string = 'Cartão';

  constructor() {}

  ngOnInit(): void {}
}
