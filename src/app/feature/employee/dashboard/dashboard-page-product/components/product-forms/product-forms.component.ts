import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/shared/interfaces/product/product';

@Component({
  selector: 'app-product-forms',
  templateUrl: './product-forms.component.html',
  styleUrls: ['./product-forms.component.scss']
})
export class ProductFormsComponent implements OnInit {


  @Input() product?: Product
  @Output() emitProductForms: EventEmitter<FormBuilder> = new EventEmitter()

  productForm = this.formBuilder.group({
    code: [''],
    title: [''],
    littleDescription: [''],
    description: [''],
    brand: [''],
    // specifications: Array<ProductSpecification>;
    // rating: number;
    category: ['']
    // category: Array<Category>;
    // reviews?: Array<ProductReview>;
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  

}
