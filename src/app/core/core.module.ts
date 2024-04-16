import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const Components = [ButtonComponent, HeaderComponent];

@NgModule({
  exports: [...Components],
  declarations: [...Components, HeaderTopComponent, HeaderMainComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
})
export class CoreModule {}
