import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order/order';

@Component({
  selector: 'app-finish-information',
  templateUrl: './finish-information.component.html',
  styleUrls: ['./finish-information.component.scss']
})
export class FinishInformationComponent implements OnInit {

  @Input() orderInformation?: Order;

  constructor() {
  }

  ngOnInit(): void {
  }

}
