import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { CoreModule } from 'src/app/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [SearchComponent],
  exports: [
    SearchComponent
  ],
  imports: [CommonModule, FontAwesomeModule, CoreModule, SharedModule]
})
export class SearchModule { }
