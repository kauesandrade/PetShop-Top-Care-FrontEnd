import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/interfaces/order/item';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss'],
})
export class OrderItemsComponent implements OnInit {
  @Input() items!: Item[];

  constructor() {}

  ngOnInit(): void {}
}
