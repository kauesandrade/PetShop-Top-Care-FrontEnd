import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatButtonComponent } from './components/chat-button/chat-button.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [ChatButtonComponent, HomeComponent],
    imports: [CommonModule],
    exports: [ChatButtonComponent, HomeComponent],
})
export class HomeModule { }
