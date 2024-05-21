import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreCardComponent } from './store-card/store-card.component';
import { StoreComponent } from './store.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  exports: [StoreComponent],
  declarations: [StoreComponent, StoreCardComponent],
  imports: [CommonModule, CoreModule],
})
export class StoreModule {}
