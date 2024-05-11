import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { StoreModule } from './store/store.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { SearchModule } from './search/search.module';

@NgModule({
    exports: [HomeModule, ContactModule, StoreModule, LoginModule, RegisterModule, CartModule, ProductModule, SearchModule],
  declarations: [
  ],
  imports: [CommonModule, FontAwesomeModule],
})
export class FeatureModule {}
