import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMainComponent } from './footer/footer-main/footer-main.component';
import { FooterCopyrightComponent } from './footer/footer-copyright/footer-copyright.component';

const Components = [ButtonComponent, FooterComponent];

@NgModule({
  exports: [...Components],
  declarations: [...Components, FooterMainComponent, FooterCopyrightComponent],
  imports: [CommonModule],
})
export class CoreModule {}
