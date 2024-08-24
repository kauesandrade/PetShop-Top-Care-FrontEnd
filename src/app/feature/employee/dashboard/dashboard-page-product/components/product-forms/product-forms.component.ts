import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Brand } from 'src/app/shared/interfaces/product/brand';
import { Category } from 'src/app/shared/interfaces/search/category';
import brands from '../../../../../../../assets/JsonFiles/brands.json';
import categories from '../../../../../../../assets/JsonFiles/categories.json';
import { ProductCategoryResponse } from 'src/app/shared/interfaces/product/response/product-category-response';

@Component({
  selector: 'app-product-forms',
  templateUrl: './product-forms.component.html',
  styleUrls: ['./product-forms.component.scss']
})
export class ProductFormsComponent implements OnInit {


  @Input() productForm!: FormGroup
  @Output() productFormChange = new EventEmitter<FormGroup>();

  brands!: Array<Brand>

  categories!: Array<ProductCategoryResponse>
  typesCategories: Array<ProductCategoryResponse> = []
  selectCategories!: Array<ProductCategoryResponse>

  constructor() { }

  ngOnInit(): void {
    this.brands = brands.brand
    this.categories = this.productForm.get('category')?.value.categories
    this.categories.forEach(category =>{
        this.typesCategories.push(category)
    })

    this.selectCategories = this.category?.value
  }

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

  get littleDescription(){
    return this.productForm.get('littleDescription')
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
