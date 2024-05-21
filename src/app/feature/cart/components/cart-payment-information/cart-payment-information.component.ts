import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CartPaymentInformations } from 'src/app/shared/interfaces/order/cart-payment-informations';
import { Item } from 'src/app/shared/interfaces/order/item';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { CepService } from 'src/app/shared/services/cep/cep.service';

@Component({
  selector: 'app-cart-payment-information',
  templateUrl: './cart-payment-information.component.html',
  styleUrls: ['./cart-payment-information.component.scss']
})
export class CartPaymentInformationComponent implements OnInit {

  cartInformations!: CartPaymentInformations;
  @Output() openAddressesModalEmitter = new EventEmitter();

  cep?: string

  constructor(protected cartService: CartService, 
    private route: ActivatedRoute, 
    private router: Router,
    private cepService: CepService) {
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

  openAddressModal(){
    this.openAddressesModalEmitter.emit();
  }

  searchCep() {
    this.cepService.searchCep(this.cep!).subscribe((res: any) => {
      if (res.erro) {
        console.log(res.erro);
      } else {
        console.log(res);
      }
    });
  }


}
