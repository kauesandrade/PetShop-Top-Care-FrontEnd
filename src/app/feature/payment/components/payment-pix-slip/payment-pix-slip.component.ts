import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-pix-slip',
  templateUrl: './payment-pix-slip.component.html',
  styleUrls: ['./payment-pix-slip.component.scss'],
})
export class PaymentPixSlipComponent implements OnInit {
  @Input() type = 'pix';

  constructor() {}

  ngOnInit(): void {}

  defineText() {
    if (this.type == 'pix') {
      return 'O Pix é uma forma rápida e fácil de fazer sua compra. Toda hora, em qualquer momento';
    }
    return 'Realize o pagamento do boleto até a data do vencimento. O prazo de entrega começa a contar após a confirmação de pagamento pela instituição financeira, que pode levar até 2 dias úteis.';
  }

  defineInfo() {
    if (this.type == 'pix') {
      return 'O QR Code é gerado após finalizar a compra e tem validade de 1 hora';
    }
    return 'O código é gerado após finalizar a compra e tem validade de 2 dias';
  }
}
