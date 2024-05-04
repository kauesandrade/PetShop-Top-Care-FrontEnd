import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './directives/Button/button.directive';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMainComponent } from './footer/footer-main/footer-main.component';
import { FooterCopyrightComponent } from './footer/footer-copyright/footer-copyright.component';
import { InputDirective } from './directives/Inputs/input.directive';
import { HeaderCategoriesComponent } from './header/header-categories/header-categories.component';
import { HeaderMainSimpleComponent } from './header/header-main/header-main-simple/header-main-simple.component';
import { HeaderMainFullComponent } from './header/header-main/header-main-full/header-main-full.component';

const Components = [
  ButtonDirective,
  HeaderComponent,
  FooterComponent,
  InputDirective,
];

@NgModule({
  exports: [...Components],
  declarations: [
    ...Components,
    HeaderTopComponent,
    HeaderMainComponent,
    FooterMainComponent,
    FooterCopyrightComponent,
    HeaderCategoriesComponent,
    HeaderMainSimpleComponent,
    HeaderMainFullComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
})
export class CoreModule {}
