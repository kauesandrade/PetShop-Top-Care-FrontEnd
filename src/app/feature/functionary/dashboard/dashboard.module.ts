import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { RouterModule } from '@angular/router';
import { DashboardSideBarComponent } from './components/dashboard-side-bar/dashboard-side-bar.component';



@NgModule({
  exports:[DashboardComponent],
  declarations: [
    DashboardComponent,
    DashboardProductComponent,
    DashboardSideBarComponent
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule, CoreModule, SharedModule]
})
export class DashboardModule { }
