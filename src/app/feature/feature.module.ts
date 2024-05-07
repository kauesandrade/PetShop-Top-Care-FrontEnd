import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { StoreModule } from './store/store.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from './login/login.module';

@NgModule({
  exports: [HomeModule, ContactModule, StoreModule, LoginModule],
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
})
export class FeatureModule {}
