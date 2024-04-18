import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent {

  @Input() width: string = '0'
  @Input() height: string ='0'

  @Input() disabled: boolean = false

  @Output() ricardo: EventEmitter<string> = new EventEmitter();

  getValue(value: string){
    this.ricardo.emit(value)
  }

}
