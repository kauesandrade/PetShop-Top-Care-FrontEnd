import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment.component';
import { FinishedPaymentComponent } from './finished-payment/finished-payment.component';
import { PaymentLayoutComponent } from './components/payment-layout/payment-layout.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { PaymentPixSlipComponent } from './components/payment-pix-slip/payment-pix-slip.component';
import { PaymentInformationComponent } from './components/payment-information/payment-information.component';
import { NgxMaskModule } from 'ngx-mask';
import { CardFormComponent } from './components/payment-card/card-form/card-form.component';
import { ChooseCardComponent } from './components/payment-card/choose-card/choose-card.component';

@NgModule({
  declarations: [
    PaymentComponent,
    FinishedPaymentComponent,
    PaymentLayoutComponent,
    PaymentCardComponent,
    PaymentPixSlipComponent,
    PaymentInformationComponent,
    CardFormComponent,
    ChooseCardComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
  ],
})
export class PaymentModule {}
