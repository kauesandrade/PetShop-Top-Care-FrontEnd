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

const Components = [
  PetComponent,
  AddressComponent,
  PetshopComponent,
  ServiceComponent,
  ScheduleComponent,
  ConfirmationComponent,
];

@NgModule({
  imports: [CommonModule, CoreModule, SharedModule, RouterModule],
  exports: [...Components],
  declarations: [...Components, LayoutComponent, NavbarComponent],
})
export class SchedulingModule {}
