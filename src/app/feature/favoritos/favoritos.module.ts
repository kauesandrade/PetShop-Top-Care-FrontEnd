import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [FavoritosComponent],
  declarations:[FavoritosComponent],
  imports: [CommonModule, FontAwesomeModule, CoreModule, SharedModule, FormsModule]
})
export class FavoritosModule { }
