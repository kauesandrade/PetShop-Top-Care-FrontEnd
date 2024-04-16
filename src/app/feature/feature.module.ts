import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { StoreModule } from './store/store.module';

@NgModule({
  exports: [HomeModule, ContactModule, StoreModule],
  declarations: [],
  imports: [CommonModule, HomeModule, ContactModule, StoreModule],
})
export class FeatureModule {}
