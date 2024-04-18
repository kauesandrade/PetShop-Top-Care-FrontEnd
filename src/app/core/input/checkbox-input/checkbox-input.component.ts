import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent {

  @Input() label: string = ""

  @Output() check: boolean = false;

  @Output() valueEvent: EventEmitter<boolean> = new EventEmitter();

  onClick(){
    this.check = !this.check;
    this.valueEvent.emit(this.check)
  }
  
}
