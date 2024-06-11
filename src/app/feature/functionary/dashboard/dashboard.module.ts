import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  exports:[DashboardComponent],
  declarations: [
    DashboardComponent,
    DashboardProductComponent,
    SideBarComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule, CoreModule, SharedModule]
})
export class DashboardModule { }
