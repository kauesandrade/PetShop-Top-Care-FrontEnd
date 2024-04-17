import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss']
})
export class RadioInputComponent {

  @Input() name: string = ""
  @Input() value: string = ""

  @Input() inputTitle: string = ""
  @Input() id: string = ""

  @Output() ricardo: EventEmitter<string> = new EventEmitter();

  getValue(value: string){
    this.ricardo.emit(value)
  }

}
