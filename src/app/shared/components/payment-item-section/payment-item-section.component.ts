import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/interfaces/order/item';
import { Service } from '../../interfaces/services/service';
import { ServiceVariant } from '../../interfaces/services/service-variant';

@Component({
  selector: 'app-payment-item-section',
  templateUrl: './payment-item-section.component.html',
  styleUrls: ['./payment-item-section.component.scss'],
})
export class PaymentItemSectionComponent implements OnInit {
  @Input() type: 'scheduling' | 'cart' = 'cart';
  @Input() items?: Item[];
  @Input() services?: ServiceVariant[];
  @Input() boxShadow: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.services);
  }
}
