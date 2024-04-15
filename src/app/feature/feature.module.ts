import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { StoreModule } from './store/store.module';
import { ContactModule } from './contact/contact.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    StoreModule,
    ContactModule
  ]
})
export class FeatureModule { }
