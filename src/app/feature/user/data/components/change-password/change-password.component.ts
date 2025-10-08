import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { PasswordValidator } from 'src/app/core/validators/password.validator';
import { CustomerPasswordRequestPatchDTO } from 'src/app/shared/interfaces/user/user';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnChanges {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  showOldPassword = false;
  showPassword = false;
  showPasswordConf = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  @Output() changedPassword =
    new EventEmitter<CustomerPasswordRequestPatchDTO>();

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  changePasswordForm = this.formBuilder.group({
    oldPassword: ['', [Validators.required, EmptyValidator]],
    newPassword: ['', [Validators.required, EmptyValidator, PasswordValidator]],
    passwordConf: [
      '',
      [Validators.required, EmptyValidator, PasswordValidator],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen();
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }
  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }
  get passwordConf() {
    return this.changePasswordForm.get('passwordConf');
  }

  isOpen() {
    if (this.open) {
      document.body.style.overflow = 'hidden';
      this.modal.nativeElement.showModal();
    }
  }

  onClose(e: Event) {
    e.preventDefault();
    this.closeModal();
  }

  closeModal() {
    this.modal.nativeElement.close();
    this.open = false;
    this.openChange.emit(this.open);
    this.changePasswordForm.reset();
    this.showOldPassword = false;
    this.showPassword = false;
    this.showPasswordConf = false;
    document.body.style.overflow = 'auto';
  }

  changeShowOldPassword(event: Event) {
    event.preventDefault();
    this.showOldPassword = !this.showOldPassword;
  }

  changeShowPassword(event: Event) {
    event.preventDefault();
    this.showPassword = !this.showPassword;
  }

  changeShowPasswordConf(event: Event) {
    event.preventDefault();
    this.showPasswordConf = !this.showPasswordConf;
  }

  checkConfirmation() {
    let passwordValue = this.newPassword?.value!;
    let passwordConfValue = this.passwordConf?.value!;

    if (
      passwordValue &&
      passwordConfValue &&
      passwordValue != passwordConfValue
    ) {
      this.passwordConf?.setErrors({ notEqual: true });
    }
  }

  isFormValid() {
    return this.changePasswordForm.valid;
  }

  onSubmit() {
    let formValues = this.changePasswordForm.value;

    let passwords: CustomerPasswordRequestPatchDTO = {
      oldPassword: formValues.oldPassword!,
      newPassword: formValues.newPassword!,
    };

    this.changedPassword.emit(passwords);
    this.closeModal();
  }
}
