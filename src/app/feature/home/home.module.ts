import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundCardComponent } from './components/round-card/round-card.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [RoundCardComponent, HomeComponent],
    imports: [CommonModule],
    exports: [RoundCardComponent, HomeComponent],
})
export class HomeModule { }
