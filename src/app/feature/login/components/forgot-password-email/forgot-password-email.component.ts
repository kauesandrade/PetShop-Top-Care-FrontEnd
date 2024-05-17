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
import { EmptyValidator } from 'src/app/core/validators/empty.validator';

@Component({
  selector: 'app-forgot-password-email',
  templateUrl: './forgot-password-email.component.html',
  styleUrls: ['./forgot-password-email.component.scss'],
})
export class ForgotPasswordEmailComponent implements OnChanges {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Output() submittedEmail = new EventEmitter();

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;
  accountEmail = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email, EmptyValidator]],
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen();
  }

  get email() {
    return this.accountEmail.get('email');
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
    this.accountEmail.reset();
    document.body.style.overflow = 'auto';
  }

  isFormValid() {
    return this.accountEmail.valid;
  }

  onSubmit() {
    this.submittedEmail.emit();
    this.closeModal();
  }
}
