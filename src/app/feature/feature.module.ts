import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartModule } from './cart/cart.module';
import { ContactModule } from './contact/contact.module';
import { FavoritesModule } from './favorites/favorites.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ProductModule } from './product/product.module';
import { RegisterModule } from './register/register.module';
import { SearchModule } from './search/search.module';
import { StoreModule } from './store/store.module';
import { UserModule } from './user/user.module';
import { PaymentModule } from './payment/payment.module';
import { ServicesModule } from './services/services.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
  exports: [
    HomeModule,
    ContactModule,
    StoreModule,
    LoginModule,
    RegisterModule,
    CartModule,
    ProductModule,
    SearchModule,
    FavoritesModule,
    UserModule,
    PaymentModule,
    ServicesModule,
    SchedulingModule,
    EmployeeModule,
  ],
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
})
export class FeatureModule {}
