import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/interfaces/order/order';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import { Schedule } from 'src/app/shared/interfaces/schedule/schedule';
import { SchedulingService } from 'src/app/shared/services/scheduling/scheduling.service';

@Component({
  selector: 'app-finish-layout',
  templateUrl: './finish-layout.component.html',
  styleUrls: ['./finish-layout.component.scss'],
})
export class FinishLayoutComponent implements OnInit {
  @Input() type: 'scheduling' | 'cart' = 'cart';
  @Input() orderInformation?: Order;
  @Input() schedulingInformation?: Schedule;

  isCopy: string = 'copy';

  faCheck = faCheck;
  faCopy = faCopy;

  constructor(
    protected user: UserService,
    private orderService: OrderService,
    private schedulingService: SchedulingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.orderInformation);
    console.log(this.schedulingInformation);
  }

  goToProfileOrder() {
    this.router.navigate(['/perfil/pedidos']);
  }

  goToProfilePets() {
    this.router.navigate(['/perfil/pets']);
  }

  cancelOrder() {
    this.orderService.cancelOrder(this.orderInformation?.orderCode!);
    this.router.navigate(['/']);
  }

  cancelSchedule() {
    this.schedulingService.cancelSchedule(this.schedulingInformation?.code!);
    this.router.navigate(['/']);
  }

  clickToCopy(code: any) {
    navigator.clipboard.writeText(code.toString());
    this.isCopy = 'copied';
  }
}
