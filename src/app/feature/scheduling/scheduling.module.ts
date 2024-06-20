import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { PetComponent } from './pages/pet/pet.component';
import { AddressComponent } from './pages/address/address.component';
import { PetshopComponent } from './pages/petshop/petshop.component';
import { ServiceComponent } from './pages/service/service.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AddAddressCardComponent } from './components/add-address-card/add-address-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const Components = [
  PetComponent,
  AddressComponent,
  PetshopComponent,
  ServiceComponent,
  ScheduleComponent,
  ConfirmationComponent,
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [...Components],
  declarations: [
    ...Components,
    LayoutComponent,
    NavbarComponent,
    AddAddressCardComponent,
  ],
})
export class SchedulingModule {}
