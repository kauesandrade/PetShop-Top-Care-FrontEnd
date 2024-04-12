import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.scss']
})
export class ChatButtonComponent implements OnInit {
    hasNotification: boolean = false; // Propriedade para controlar a notificação

    constructor() {}

    ngOnInit(): void {
        // Defina o estado inicial da notificação
        // Por exemplo, você pode definir para `true` se houver uma nova mensagem
        this.hasNotification = false;
    }
}
