import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent {

  @Input() width: string = "0"
  @Input() height: string = "0"

  @Input() placeholder: string = ""
  @Input() inputTitle: string = ""

  @Output() ricardo: EventEmitter<string> = new EventEmitter();

  getValue(value: string){
    this.ricardo.emit(value)
  }

}
