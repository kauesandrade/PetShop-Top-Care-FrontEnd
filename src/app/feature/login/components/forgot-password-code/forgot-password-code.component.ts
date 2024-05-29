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
import { EmptyValidator } from 'src/app/core/validators/empty.validator';

@Component({
  selector: 'app-forgot-password-code',
  templateUrl: './forgot-password-code.component.html',
  styleUrls: ['./forgot-password-code.component.scss'],
})
export class ForgotPasswordCodeComponent implements OnChanges {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Output() submittedCode = new EventEmitter();

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  randomCode!: number;

  codeForm = this.formBuilder.group({
    code: ['', [Validators.required, EmptyValidator]],
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen();
    this.generateRandomCode();
  }

  get code() {
    return this.codeForm.get('code');
  }

  isOpen() {
    if (this.open) {
      document.body.style.overflow = 'hidden';
      this.modal.nativeElement.showModal();
    }
  }

  generateRandomCode() {
    this.randomCode = Math.floor(Math.random() * 899999 + 100000);
    console.log(this.randomCode);
  }

  resendCode(e: Event) {
    e.preventDefault();
    this.generateRandomCode();
  }

  closeModal() {
    this.modal.nativeElement.close();
    this.open = false;
    this.openChange.emit(this.open);
    this.codeForm.reset();
    document.body.style.overflow = 'auto';
  }

  isFormValid() {
    return this.codeForm.valid;
  }

  onSubmit() {
    if (this.randomCode != parseInt(this.code?.value!)) {
      this.code?.setErrors({ wrongCode: true });
      return;
    }
    this.submittedCode.emit();
    this.closeModal();
  }
}
