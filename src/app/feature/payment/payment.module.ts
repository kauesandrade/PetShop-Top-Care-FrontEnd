import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment.component';



@NgModule({
  declarations: [
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    FormsModule,
  ]
})
export class PaymentModule { }
