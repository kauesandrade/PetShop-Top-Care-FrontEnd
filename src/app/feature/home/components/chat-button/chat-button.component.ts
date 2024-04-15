import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.scss'],
})
export class ChatButtonComponent {
  @Input() hasNotification:boolean = false;

  onClick(): void {
    console.log('Botão de chat clicado!');
  }
}
