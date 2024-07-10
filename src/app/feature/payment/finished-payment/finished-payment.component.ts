import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogarithmicScale } from 'chart.js';
import { Order } from 'src/app/shared/interfaces/order/order';
import { Schedule } from 'src/app/shared/interfaces/schedule/schedule';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';
import { SchedulingService } from 'src/app/shared/services/scheduling/scheduling.service';

@Component({
  selector: 'app-finished-payment',
  templateUrl: './finished-payment.component.html',
  styleUrls: ['./finished-payment.component.scss'],
})
export class FinishedPaymentComponent implements OnInit {
  @Input() paymentMethod = 'Cartão';

  type: 'scheduling' | 'cart' = 'cart';
  id!: number;
  orderInformation?: Order;
  schedulingInformation?: Schedule;

  constructor(
    private orderService: OrderService,
    private schedulingService: SchedulingService,
    private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.type = this.paymentService.type;

    this.id = Number(
      this.route.snapshot.paramMap.get('id')?.replace('%20', ' ')
    );

    if (this.type == 'cart') {
      this.orderInformation = this.orderService.getOrder(this.id) || undefined;
      if (typeof this.orderInformation == undefined) {
        this.router.navigate(['/']);
      }
    } else {
      this.schedulingInformation =
        this.schedulingService.getScheduling(this.id) || undefined;
      if (this.schedulingInformation == undefined) {
        this.router.navigate(['/']);
      }
    }

    console.log(this.orderInformation);
    console.log(this.schedulingInformation);
    console.log(this.schedulingService.getScheduling(this.id));
  }
}
