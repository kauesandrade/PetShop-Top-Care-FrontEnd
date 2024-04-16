import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  exports: [HomeComponent, AboutUsComponent],
  declarations: [HomeComponent, AboutUsComponent],
  imports: [CommonModule],
})
export class HomeModule {}
