import { Component, Input, OnInit } from '@angular/core';
import {
  faBox,
  faCheck,
  faPlane,
  faShoppingCart,
  faTruck,
  faTruckLoading,
} from '@fortawesome/free-solid-svg-icons';
import { ShippingStatus } from 'src/app/shared/interfaces/shipping/shipping-status';

@Component({
  selector: 'app-order-shipping',
  templateUrl: './order-shipping.component.html',
  styleUrls: ['./order-shipping.component.scss'],
})
export class OrderShippingComponent implements OnInit {
  @Input() shippingStatus!: Array<ShippingStatus>;

  icons = [faShoppingCart, faBox, faTruckLoading, faPlane, faTruck, faCheck];

  lastValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  defineColor(dateTime: string) {
    if (dateTime) {
      this.lastValue = dateTime;
      return 'blue';
    } else if (this.lastValue) {
      this.lastValue = dateTime;
      return 'yellow';
    } else {
      this.lastValue = dateTime;
      return '';
    }
  }
}
