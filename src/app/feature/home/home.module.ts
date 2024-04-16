import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundCardComponent } from './components/round-card/round-card.component';
import { HomeComponent } from './home.component';

@NgModule({
  exports: [HomeComponent],
  declarations: [RoundCardComponent, HomeComponent],
  imports: [CommonModule],
})
export class HomeModule {}
