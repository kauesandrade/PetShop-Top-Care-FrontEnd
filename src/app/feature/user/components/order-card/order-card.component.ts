import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faClock, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Order } from 'src/app/shared/interfaces/order/order';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() order!: Order;

  faClock = faClock;
  faTrash = faTrashAlt;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {}

  openPage() {
    if (this.order) {
      this.router.navigate([`${this.router.url}/${this.order.orderCode}`]);
    }
  }

}
