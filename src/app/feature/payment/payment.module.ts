import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment.component';
import { FinishedPaymentComponent } from './finished-payment/finished-payment.component';
import { PaymentLayoutComponent } from './components/payment-layout/payment-layout.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { PaymentPixSlipComponent } from './components/payment-pix-slip/payment-pix-slip.component';

@NgModule({
  declarations: [
    PaymentComponent,
    FinishedPaymentComponent,
    PaymentLayoutComponent,
    PaymentCardComponent,
    PaymentPixSlipComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    FormsModule,
  ],
})
export class PaymentModule {}
