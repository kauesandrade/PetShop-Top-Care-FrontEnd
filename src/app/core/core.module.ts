import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMainComponent } from './footer/footer-main/footer-main.component';
import { FooterCopyrightComponent } from './footer/footer-copyright/footer-copyright.component';
import { InputModule } from './input/input.module';

const Components = [ButtonComponent, HeaderComponent, FooterComponent];

@NgModule({
  exports: [...Components, InputModule],
  declarations: [
    ...Components,
    HeaderTopComponent,
    HeaderMainComponent,
    FooterMainComponent,
    FooterCopyrightComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
})
export class CoreModule {}
