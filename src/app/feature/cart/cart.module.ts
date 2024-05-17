import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartProductCardComponent } from './components/cart-product-card/cart-product-card.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  exports: [CartComponent],
  declarations: [
    CartComponent,
    CartProductCardComponent
  ],
  imports: [CommonModule, FontAwesomeModule, CoreModule, SharedModule, FormsModule]
})
export class CartModule { }
