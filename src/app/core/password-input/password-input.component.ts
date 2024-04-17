import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent {

  eyeIcon = faEye

  @Input() placeholder: string = ""

  @Input() width: string = ""
  @Input() height: string = ""
 
  @Input() disabled: boolean = false

  @Output() ricardo: EventEmitter<string> = new EventEmitter();

  getValue(value: string){
    this.ricardo.emit(value)
  }

  showPassword: boolean = false;

  changeVisibility() {
    this.showPassword = !this.showPassword;
    console.log("aus")
  }

}
