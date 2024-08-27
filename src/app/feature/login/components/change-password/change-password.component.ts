import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
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

  showPassword = false;
  showPasswordConf = false;

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  passwordForm = this.formBuilder.group({
    password: ['', [Validators.required, EmptyValidator, PasswordValidator]],
    passwordConf: ['', [Validators.required, EmptyValidator]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
    ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen();
  }

  get password() {
    return this.passwordForm.get('password');
  }

  get passwordConf() {
    return this.passwordForm.get('passwordConf');
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
    let passwordValue = this.password?.value!;
    let passwordConfValue = this.passwordConf?.value!;

    if (
      passwordValue &&
      passwordConfValue &&
      passwordValue != passwordConfValue
    ) {
      this.passwordConf?.setErrors({ notEqual: true });
    }
  }
  isOpen() {
    if (this.open) {
      document.body.style.overflow = 'hidden';
      this.modal.nativeElement.showModal();
    }
  }

  onCancel(e: Event) {
    e.preventDefault();
    this.closeModal();
  }

  closeModal() {
    this.modal.nativeElement.close();
    this.open = false;
    this.openChange.emit(this.open);
    this.passwordForm.reset();
    document.body.style.overflow = 'auto';
  }

  isFormValid() {
    return this.passwordForm.valid;
  }

  onSubmit() {
    this.userService.changePassword(this.password?.value!).subscribe();
    this.closeModal();
  }
}
