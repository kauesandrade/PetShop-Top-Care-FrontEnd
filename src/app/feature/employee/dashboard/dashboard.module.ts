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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardOrderComponent } from './dashboard-order/dashboard-order.component';
import { ServiceCardDashboardComponent } from './components/service-card-dashboard/service-card-dashboard.component';
import { OrderCardDashboardComponent } from './components/order-card-dashboard/order-card-dashboard.component';
import { DashboardServiceComponent } from './dashboard-service/dashboard-service.component';
import { DashboardSchedulingComponent } from './dashboard-scheduling/dashboard-scheduling.component';
import { SchedulingCardDashboardComponent } from './components/scheduling-card-dashboard/scheduling-card-dashboard.component';
import { DashboardPageProductComponent } from './dashboard-page-product/dashboard-page-product.component';
import { NgxMaskModule } from 'ngx-mask';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceFormsComponent } from './dashboard-page-service/components/service-forms/service-forms.component';
import { DashboardPageSchedulingComponent } from './dashboard-page-scheduling/dashboard-page-scheduling.component';
import { ProductFormsComponent } from './dashboard-page-product/components/product-forms/product-forms.component';
import { ProductVariantFormsComponent } from './dashboard-page-product/components/product-variant-forms/product-variant-forms.component';
import { SpecificationsFormsComponent } from './dashboard-page-product/components/specifications-forms/specifications-forms.component';
import { ServiceVariantFormsComponent } from './dashboard-page-service/components/service-variant-forms/service-variant-forms.component';
import { DashboardPageServiceComponent } from './dashboard-page-service/dashboard-page-service.component';

@NgModule({
  exports: [DashboardComponent],
  declarations: [
    DashboardComponent,
    DashboardProductComponent,
    DashboardSideBarComponent,
    ProductCardDashboardComponent,
    DashboardOrderComponent,
    ServiceCardDashboardComponent,
    OrderCardDashboardComponent,
    DashboardServiceComponent,
    DashboardSchedulingComponent,
    SchedulingCardDashboardComponent,
    DashboardPageProductComponent,
    ProductFormsComponent,
    SpecificationsFormsComponent,
    ProductVariantFormsComponent,
    DashboardPageServiceComponent,
    ServiceVariantFormsComponent,
    ServiceFormsComponent,
    DashboardPageSchedulingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    CoreModule,
    SharedModule,
    MultiSelectModule,
    BrowserAnimationsModule,
  ],
})
export class DashboardModule {}
