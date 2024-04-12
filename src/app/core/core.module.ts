import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMainComponent } from './footer/footer-main/footer-main.component';
import { FooterCopyrightComponent } from './footer/footer-copyright/footer-copyright.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const Components = [
  ButtonComponent,
  FooterComponent,
  FooterMainComponent,
  FooterCopyrightComponent,
];

@NgModule({
  exports: [...Components],
  declarations: [...Components],
  imports: [CommonModule, FontAwesomeModule],
})
export class CoreModule {}
