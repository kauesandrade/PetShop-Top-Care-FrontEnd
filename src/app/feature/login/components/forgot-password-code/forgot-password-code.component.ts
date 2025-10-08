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
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { UserService } from 'src/app/shared/services/user/user.service';

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
  data!: any;

  codeForm = this.formBuilder.group({
    code: ['', [Validators.required, EmptyValidator]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
    ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen();
  }

  get code() {
    return this.codeForm.get('code');
  }

  isOpen() {
    if (this.open) {
      this.generateRandomCode();
      document.body.style.overflow = 'hidden';
      this.modal.nativeElement.showModal();
    }
  }

  generateRandomCode() {
    this.userService.getCodeRequest().subscribe(
      (response) => {
        this.data = response;
        this.randomCode = this.data.code;
        console.log(this.randomCode);
      }
    );
    
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
