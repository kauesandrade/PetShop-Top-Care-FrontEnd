import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RoundCardComponent } from './components/round-card/round-card.component';
import { ChatButtonComponent } from './components/chat-button/chat-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  exports: [HomeComponent],
  declarations: [HomeComponent, RoundCardComponent, ChatButtonComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class HomeModule {}
