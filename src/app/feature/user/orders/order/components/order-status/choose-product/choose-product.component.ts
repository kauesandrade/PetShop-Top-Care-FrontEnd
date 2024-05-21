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
import { Router } from '@angular/router';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { Item } from 'src/app/shared/interfaces/order/item';

@Component({
  selector: 'app-choose-product',
  templateUrl: './choose-product.component.html',
  styleUrls: ['./choose-product.component.scss'],
})
export class ChooseProductComponent implements OnChanges {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Input() productList!: Array<Item>;

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  productForm = this.formBuilder.group({
    product: ['', [Validators.required, EmptyValidator]],
  });

  products = new Array<string>();

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen();
    this.products = [];
    this.productList.map((item) => {
      this.products.push(item.product.title);
    });

    console.log(this.products);

    this.productForm = this.formBuilder.group({
      product: [this.products[0]],
    });
  }

  get product() {
    return this.productForm.get('product');
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
    this.productForm.reset();
    document.body.style.overflow = 'auto';
  }

  isFormValid() {
    return this.productForm.valid;
  }

  onSubmit() {
    this.router.navigate([`${this.router.url}/avaliar/${this.product?.value}`]);
    this.closeModal();
  }
}
