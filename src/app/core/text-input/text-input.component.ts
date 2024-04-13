import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {

  @Input() placeholder: string = ""

  @Input() width: string = ""
  @Input() height: string = ""
 
  @Input() disabled: boolean = false
  constructor() { }

}
