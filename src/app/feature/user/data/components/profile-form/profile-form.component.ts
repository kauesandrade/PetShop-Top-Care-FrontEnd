import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent {
  @Input() profileForm!: FormGroup;
  @Output() profileFormChange = new EventEmitter<FormGroup>();

  genders = ['Masculino', 'Feminino', 'Outro'];

  faFile = faFile;

  constructor() {}

  onInput() {
    this.profileFormChange.emit(this.profileForm);
  }

  get image() {
    return this.profileForm.get('image');
  }
  get name() {
    return this.profileForm.get('name');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get cpf() {
    return this.profileForm.get('cpf');
  }
  get birth() {
    return this.profileForm.get('birth');
  }
  get gender() {
    return this.profileForm.get('gender');
  }
}
