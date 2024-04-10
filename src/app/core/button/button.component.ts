import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() color: string = 'primary';
  @Input() disabled: boolean = false;
  @Input() width: string = '0';

  @Input() iconOnly: boolean = false;

  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onClick(): void {
    this.click.emit();
  }
}
