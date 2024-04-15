import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreCardComponent } from './store-card/store-card.component';
import { StoreComponent } from './store.component';


@NgModule({
  exports:[StoreComponent],
  declarations: [
    StoreComponent,
    StoreCardComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class StoreModule { }
