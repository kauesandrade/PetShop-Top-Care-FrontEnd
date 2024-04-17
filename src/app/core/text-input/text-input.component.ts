import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {

  @Input() placeholder: string = ""
  @Input() inputTitle: string = ""

  @Input() width: string = ""
  @Input() height: string = ""
 
  @Input() disabled: boolean = false
  @Input() borderless: boolean = false

  @Input() withIcon: boolean = false

  @Output() ricardo: EventEmitter<string> = new EventEmitter();

  getValue(value: string){
    this.ricardo.emit(value)
  }

}
