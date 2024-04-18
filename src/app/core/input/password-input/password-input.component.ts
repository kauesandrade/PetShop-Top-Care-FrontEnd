import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent {

  faEye = faEye
  faEyeSlash = faEyeSlash

  @Input() placeholder: string = ""
  @Input() label: string = ""

  @Input() width: string = ""
  @Input() height: string = ""
 
  @Input() disabled: boolean = false

  @Output() valueEvent: EventEmitter<string> = new EventEmitter();

  getValue(value: string){
    this.valueEvent.emit(value)
  }

  showPassword: boolean = false;

  changeVisibility() {
    this.showPassword = !this.showPassword;
  }

}
