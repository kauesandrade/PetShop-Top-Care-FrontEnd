import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { IconPetCardComponent } from './components/icon-pet-card/icon-pet-card.component';



@NgModule({
  exports: [ServicesComponent],
  declarations: [ServicesComponent, ServiceCardComponent, IconPetCardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    FormsModule,
  ],
})
export class ServicesModule { }
