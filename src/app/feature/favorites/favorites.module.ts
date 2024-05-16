import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  exports: [FavoritesComponent],
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    FormsModule,
  ],
})
export class FavoritesModule {}
