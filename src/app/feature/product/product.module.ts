import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  exports: [ProductComponent],
  declarations: [
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [CommonModule, FontAwesomeModule, CoreModule, SharedModule],
})
export class ProductModule { }
