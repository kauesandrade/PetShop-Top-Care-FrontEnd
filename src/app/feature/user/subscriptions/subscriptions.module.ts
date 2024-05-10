import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './subscriptions.component';

@NgModule({
  exports: [SubscriptionsComponent],
  declarations: [SubscriptionsComponent],
  imports: [CommonModule],
})
export class SubscriptionsModule {}
