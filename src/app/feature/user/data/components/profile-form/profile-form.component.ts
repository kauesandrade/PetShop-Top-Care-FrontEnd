import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faFile, faFileImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent {
  @Input() profileForm!: FormGroup;
  @Input() profileImg: string | ArrayBuffer = '';
  @Output() profileFormChange = new EventEmitter<FormGroup>();

  genders = ['Masculino', 'Feminino', 'Outro'];

  faFileImage = faFileImage;

  constructor() {}

  onInput() {
    this.profileFormChange.emit(this.profileForm);
  }

  changeImg(event: any) {
    const files = event.target.files;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.profileImg = reader.result!;
    };

    this.image!.setValue(files[0]);
  }

  isDisabled() {
    return !this.profileForm.enabled;
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
