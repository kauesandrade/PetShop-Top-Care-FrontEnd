import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent {

  @Input() width: string = '0'
  @Input() height: string ='0'

  @Input() disabled: boolean = false

  constructor() { }

}
