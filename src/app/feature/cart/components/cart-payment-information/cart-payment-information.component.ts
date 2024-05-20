import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CartPaymentInformations } from 'src/app/shared/interfaces/order/cart-payment-informations';
import { Item } from 'src/app/shared/interfaces/order/item';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-cart-payment-information',
  templateUrl: './cart-payment-information.component.html',
  styleUrls: ['./cart-payment-information.component.scss']
})
export class CartPaymentInformationComponent implements OnInit {

  cartInformations!: CartPaymentInformations;

  constructor(private cartService: CartService, private route: ActivatedRoute, private router: Router) {
  this.cartService.getCartInformations().subscribe(data =>{
    this.cartInformations = data
  });
  }


  ngOnInit(): void {
    
  }

  handleClickBuy() {

  }

  handleClickGoback() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  chooseShipping(evt: any){
    this.cartService.setShippingPrice(evt);
  }



}
