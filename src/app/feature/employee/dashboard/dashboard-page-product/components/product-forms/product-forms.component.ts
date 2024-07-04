import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Brand } from 'src/app/shared/interfaces/product/brand';
import brands from '../../../../../../../assets/JsonFiles/brands.json';

@Component({
  selector: 'app-product-forms',
  templateUrl: './product-forms.component.html',
  styleUrls: ['./product-forms.component.scss']
})
export class ProductFormsComponent implements OnInit {


  @Input() productForm!: FormGroup
  @Output() productFormChange = new EventEmitter<FormGroup>();

  brands!: Array<Brand>

  constructor() { }

  ngOnInit(): void {
    this.brands = brands.brand
  }

  changeEmitProductForms(){
    console.log(this.productForm);
    this.productFormChange.emit(this.productForm);
  }

}
