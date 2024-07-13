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

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnChanges {
  @Input() title!: string;
  @Input() cancelText = 'Cancelar';
  @Input() confirmText = 'Confirmar';
  @Input() message?: string;
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Output() action = new EventEmitter<boolean>();

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen();
  }

  isOpen() {
    if (this.open) {
      document.body.style.overflow = 'hidden';
      this.modal.nativeElement.showModal();
    }
  }

  closeModal() {
    this.modal.nativeElement.close();
    this.open = false;
    this.openChange.emit(this.open);
    document.body.style.overflow = 'auto';
  }

  onCancel() {
    this.action.emit(false);
    this.closeModal();
  }

  onConfirm() {
    this.action.emit(true);
    this.closeModal();
  }
}
