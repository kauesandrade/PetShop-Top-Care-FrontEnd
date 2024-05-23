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

  codeForm = this.formBuilder.group({
    code: ['', [Validators.required, EmptyValidator]],
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen();
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

  resendCode(e: Event) {
    e.preventDefault();
    //
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
    this.submittedCode.emit();
    this.closeModal();
  }
}
