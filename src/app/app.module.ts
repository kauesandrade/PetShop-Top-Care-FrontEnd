import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { FeatureModule } from './feature/feature.module';
registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FeatureModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      preventDuplicates: true,
      newestOnTop: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      timeOut: 3000,
      disableTimeOut: 'extendedTimeOut',
      maxOpened: 2,
      easing: 'ease-in',
      easeTime: 300,
      positionClass: 'toast-top-right',
      toastClass: 'ngx-toastr toastr',
      titleClass: 'toast-title toastr-title',
      messageClass: 'toast-message toastr-message',
    }),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
