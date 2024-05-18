import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Item } from 'src/app/shared/interfaces/order/item';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-cart-payment-information',
  templateUrl: './cart-payment-information.component.html',
  styleUrls: ['./cart-payment-information.component.scss']
})
export class CartPaymentInformationComponent implements OnInit, OnDestroy {

  itens: Array<Item> = []

  total: number = 0;
  order: number = 0;

  private unsubscribe = new Subject<void>();

  constructor(private cartService: CartService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.itens = this.cartService.itensCart;
    this.order = this.cartService.sumProductPrices(this.itens);
    this.cartService.getItens().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.itens = data;
      this.order = this.cartService.sumProductPrices(this.itens);
    });
  }

  handleClickBuy() {

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  handleClickGoback() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }



}
