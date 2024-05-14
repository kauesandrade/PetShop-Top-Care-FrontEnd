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
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnChanges {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  showLastPassword = false;
  showPassword = false;
  showPasswordConf = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  @Output() changedPassword = new EventEmitter<string>();

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  changePasswordForm = this.formBuilder.group({
    lastPassword: ['', [Validators.required, EmptyValidator]],
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

  get lastPassword() {
    return this.changePasswordForm.get('lastPassword');
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
    this.showLastPassword = false;
    this.showPassword = false;
    this.showPasswordConf = false;
    document.body.style.overflow = 'auto';
  }

  changeShowLastPassword(event: Event) {
    event.preventDefault();
    this.showLastPassword = !this.showLastPassword;
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

    if (this.userService.loggedUser?.password != formValues.lastPassword) {
      this.lastPassword?.setErrors({ wrongPassword: true });
      return;
    } else if (
      this.userService.loggedUser?.password == formValues.newPassword
    ) {
      this.newPassword?.setErrors({ samePassword: true });
      return;
    }

    this.changedPassword.emit(formValues.newPassword!);
    this.closeModal();
  }
}
