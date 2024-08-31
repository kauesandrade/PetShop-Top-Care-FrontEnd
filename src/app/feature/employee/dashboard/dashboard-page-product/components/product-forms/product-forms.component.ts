import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ca, tr } from 'date-fns/locale';
import { Brand } from 'src/app/shared/interfaces/product/brand';
import { ProductCategoryResponse } from 'src/app/shared/interfaces/product/response/product-category-response';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-forms',
  templateUrl: './product-forms.component.html',
  styleUrls: ['./product-forms.component.scss']
})
export class ProductFormsComponent implements OnInit {


  @Input() productForm!: FormGroup
  @Output() productFormChange = new EventEmitter<FormGroup>();

  brands!: Array<Brand>
  typesCategories: Array<ProductCategoryResponse> = []
  selectCategories: Array<ProductCategoryResponse> = []

  constructor() { }

  ngOnInit(): void {
    this.brands = [];
    this.selectCategories = [];
  }

  // verifyCode(){
  //   if(this.productForm.get('code')!.value != null){
  //     this.productForm.controls['code'].setErrors({'incorrect': true});
  //   }else{
  //     this.productForm.controls['code'].setErrors({'incorrect': false});
  //   }
  // }

  changeEmitProductForms(){
    console.log(this.productForm);
    this.productFormChange.emit(this.productForm);
  }

  get code(){
    return this.productForm.get('code')
  }

  get title(){
    return this.productForm.get('title')
  }

  get shortDescription(){
    return this.productForm.get('shortDescription')
  }

  get description(){
    return this.productForm.get('description')
  }

  get brand(){
    return this.productForm.get('brand')
  }

  get category(){
    return this.productForm.get('category')
  }

}
