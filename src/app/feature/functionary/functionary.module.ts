import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  exports:[DashboardModule],
  declarations: [],
  imports: [CommonModule, FontAwesomeModule, CoreModule, SharedModule]
})
export class FunctionaryModule { }
