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
  typesCategories: Array<{type: string}> = []
  selectCategories!: Array<string>

  constructor() { }

  ngOnInit(): void {
    this.brands = brands.brand
    this.categories = categories.category

    this.categories.forEach(categories =>{
      categories.types.forEach( type =>{
        console.log(type);
        this.typesCategories.push({type: type})
      })
    })
  }

  changeEmitProductForms(){
    console.log(this.productForm);
    this.productFormChange.emit(this.productForm);
  }

}
