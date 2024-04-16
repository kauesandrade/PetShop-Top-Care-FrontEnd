import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatButtonComponent } from './components/chat-button/chat-button.component';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  exports: [ChatButtonComponent, HomeComponent],
  declarations: [ChatButtonComponent, HomeComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class HomeModule {}
