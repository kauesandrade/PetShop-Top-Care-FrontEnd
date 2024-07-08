import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Brand } from 'src/app/shared/interfaces/product/brand';
import { Category } from 'src/app/shared/interfaces/search/category';
import brands from '../../../../../../../assets/JsonFiles/brands.json';
import categories from '../../../../../../../assets/JsonFiles/categories.json';

@Component({
  selector: 'app-product-forms',
  templateUrl: './product-forms.component.html',
  styleUrls: ['./product-forms.component.scss']
})
export class ProductFormsComponent implements OnInit {


  @Input() productForm!: FormGroup
  @Output() productFormChange = new EventEmitter<FormGroup>();

  brands!: Array<Brand>

  categories!: Array<Category>
  typesCategories: Array<string> = []
  selectCategories!: Array<string>

  constructor() { }

  ngOnInit(): void {

    this.brands = brands.brand
    this.categories = categories.category

    this.categories.forEach(categories =>{
      categories.types.forEach(type =>{  
        this.typesCategories.push(type)
      })
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
