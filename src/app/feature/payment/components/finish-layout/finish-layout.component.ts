import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/interfaces/order/order';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-finish-layout',
  templateUrl: './finish-layout.component.html',
  styleUrls: ['./finish-layout.component.scss']
})
export class FinishLayoutComponent implements OnInit {

  @Input() orderInformation?: Order;

  constructor(
    protected user: UserService, 
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  goToProfileOrder(){
    this.router.navigate(["/perfil/pedidos"]);
  }

}
