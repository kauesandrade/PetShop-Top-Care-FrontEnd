import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}

  // Tutorial de usar um toast do primeng
  // constructor(private messageService: MessageService) {}

  // showSuccess() {
  //   this.messageService.add({
  //     severity: 'success',
  //     summary: 'Success',
  //     life: 1000000,
  //     closable: false,
  //   });
  // }
}
