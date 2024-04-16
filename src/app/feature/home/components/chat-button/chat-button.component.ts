import { Component, Input } from '@angular/core';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.scss'],
})
export class ChatButtonComponent {
  @Input() hasNotification: boolean = false;

  faCommentDots = faCommentDots;

  onClick(): void {
    console.log('Botão de chat clicado!');
  }
}
