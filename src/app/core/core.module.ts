import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ButtonDirective } from './directives/Button/button.directive';
import { InputDirective } from './directives/Inputs/input.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMainComponent } from './components/header/header-main/header-main.component';
import { HeaderTopComponent } from './components/header/header-top/header-top.component';
import { HeaderMainFullComponent } from './components/header/header-main/header-main-full/header-main-full.component';
import { HeaderMainSimpleComponent } from './components/header/header-main/header-main-simple/header-main-simple.component';
import { HeaderCategoriesComponent } from './components/header/header-categories/header-categories.component';
import { FooterMainComponent } from './components/footer/footer-main/footer-main.component';
import { FooterCopyrightComponent } from './components/footer/footer-copyright/footer-copyright.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardSideBarComponent } from '../shared/components/dashboard-side-bar/dashboard-side-bar.component';

const Components = [
  ButtonDirective,
  InputDirective,
  HeaderComponent,
  FooterComponent,
];

@NgModule({
  exports: [...Components],
  declarations: [
    ...Components,
    HeaderMainComponent,
    HeaderTopComponent,
    HeaderMainFullComponent,
    HeaderMainSimpleComponent,
    HeaderCategoriesComponent,
    FooterMainComponent,
    FooterCopyrightComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule, FormsModule],
})
export class CoreModule {}
