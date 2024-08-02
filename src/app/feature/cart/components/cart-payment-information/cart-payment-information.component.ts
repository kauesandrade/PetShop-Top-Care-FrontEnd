import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartPaymentInformations } from 'src/app/shared/interfaces/order/cart-payment-informations';
import { ShippingType } from 'src/app/shared/interfaces/shipping/shipping-type';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { CepService } from 'src/app/shared/services/cep/cep.service';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';

@Component({
  selector: 'app-cart-payment-information',
  templateUrl: './cart-payment-information.component.html',
  styleUrls: ['./cart-payment-information.component.scss'],
})
export class CartPaymentInformationComponent implements OnInit {
  cartInformations!: CartPaymentInformations;
  @Output() openAddressesModalEmitter = new EventEmitter();

  cep?: string;

  shippingTypes: ShippingType[] = [
    {
      name: 'Frete Econômico',
      shippingTime: 'de 4 a 6 dias úteis',
      price: 0,
      time: 6,
    },
    {
      name: 'Frete Expresso',
      shippingTime: 'em até 48 horas',
      price: 10.5,
      time: 2,
    },
  ];

  constructor(
    protected cartService: CartService,
    protected paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router,
    private cepService: CepService
  ) {
    this.cartService.getCartInformations().subscribe((data) => {
      this.cartInformations = data;
    });
  }

  ngOnInit(): void {}

  handleClickBuy() {
    if (this.cartInformations.address && this.cartInformations.shippingType) {
      this.paymentService.type = 'cart';
      this.router.navigate(['/carrinho/pagamento']);
    }
  }

  handleClickGoback() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  chooseShipping(evt: any) {
    this.cartService.setShipping(evt);
  }

  openAddressModal() {
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
