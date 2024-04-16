import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RoundCardComponent } from './components/round-card/round-card.component';
import { ChatButtonComponent } from './components/chat-button/chat-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  exports: [HomeComponent],
  declarations: [
    HomeComponent,
    RoundCardComponent,
    ChatButtonComponent,
    HomeBannerComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, CoreModule],
})
export class HomeModule {}
