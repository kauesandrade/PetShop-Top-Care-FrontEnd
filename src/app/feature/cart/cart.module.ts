import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartProductCardComponent } from './components/cart-product-card/cart-product-card.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartPaymentInformationComponent } from './components/cart-payment-information/cart-payment-information.component';
import { CartProductCardSectionComponent } from './components/cart-product-card-section/cart-product-card-section.component';



@NgModule({
  exports: [CartComponent],
  declarations: [
    CartComponent,
    CartProductCardComponent,
    CartPaymentInformationComponent,
    CartProductCardSectionComponent
  ],
  imports: [CommonModule, FontAwesomeModule, CoreModule, SharedModule, FormsModule]
})
export class CartModule { }
