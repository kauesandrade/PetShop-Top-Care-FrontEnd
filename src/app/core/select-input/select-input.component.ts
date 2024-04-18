import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})

export class SelectInputComponent {

  @Input() opcoes: string[] = ['Homem', 'Mulher', 'Prefiro não dizer'];
  @Input() label: string = ""

  @Input() width: string = "0"
  @Input() height: string = "0"

  @Input() disabled: boolean = false

  @Output() valueEvent: EventEmitter<string> = new EventEmitter();

  onSelect(value: string) {
    this.valueEvent.emit(value)
  }

}
