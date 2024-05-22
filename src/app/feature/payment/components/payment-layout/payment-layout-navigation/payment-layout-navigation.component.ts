import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-payment-layout-navigation',
  templateUrl: './payment-layout-navigation.component.html',
  styleUrls: ['./payment-layout-navigation.component.scss'],
})
export class PaymentLayoutNavigationComponent implements OnInit {
  @Input() page: string = 'Cartão';
  @Output() pageChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
