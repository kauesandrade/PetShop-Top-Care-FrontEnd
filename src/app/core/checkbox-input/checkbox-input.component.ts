import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent {

  @Output() check: boolean = false;

  onClick(){
    this.check = !this.check
  }
  constructor() { }

}
