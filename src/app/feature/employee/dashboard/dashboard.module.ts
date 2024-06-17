import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { RouterModule } from '@angular/router';
import { DashboardSideBarComponent } from './components/dashboard-side-bar/dashboard-side-bar.component';
import { ProductCardDashboardComponent } from './components/product-card-dashboard/product-card-dashboard.component';
import { FormsModule } from '@angular/forms';
import { DashboardOrderComponent } from './dashboard-order/dashboard-order.component';
import { OrderCardComponent } from '../../user/components/order-card/order-card.component';
import { OrderCardDashboardComponent } from './components/order-card-dashboard/order-card-dashboard.component';



@NgModule({
  exports:[DashboardComponent],
  declarations: [
    DashboardComponent,
    DashboardProductComponent,
    DashboardSideBarComponent,
    ProductCardDashboardComponent,
    DashboardOrderComponent,
    OrderCardDashboardComponent
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule, FormsModule, CoreModule, SharedModule]
})
export class DashboardModule { }
