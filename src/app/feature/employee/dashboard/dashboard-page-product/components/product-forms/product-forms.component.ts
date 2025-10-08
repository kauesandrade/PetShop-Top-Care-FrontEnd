import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ca, tr } from 'date-fns/locale';
import { BrandResponse } from 'src/app/shared/interfaces/product/brand';
import { ProductCategoryResponse } from 'src/app/shared/interfaces/product/response/product-category-response';
import { BrandService } from 'src/app/shared/services/brand/brand.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-forms',
  templateUrl: './product-forms.component.html',
  styleUrls: ['./product-forms.component.scss']
})
export class ProductFormsComponent implements OnInit {
  @Input() productForm!: FormGroup
  @Output() productFormChange = new EventEmitter<FormGroup>();

  brands: Array<BrandResponse> = []
  typesCategories: Array<ProductCategoryResponse> = []
  @Input() selectCategories: Array<ProductCategoryResponse> = []

  constructor(private categoryService: CategoryService, private brandService: BrandService) {
  }
  
  ngOnInit(): void {
    this.categoryService.getAllCategoriesGroup().subscribe((response) => {
      response.forEach((groupCategory: any) => {
        groupCategory.categories.forEach((category: any) => {
          this.typesCategories.push(category);
        })
      });
    });
    
    this.brandService.getAllBrands().subscribe((response) => {
      this.brands = response;
    });
  }

  changeEmitProductForms() {
    this.productFormChange.emit(this.productForm);
  }

  get code() {
    return this.productForm.get('code')
  }

  get title() {
    return this.productForm.get('title')
  }

  get shortDescription() {
    return this.productForm.get('shortDescription')
  }

  get description() {
    return this.productForm.get('description')
  }

  get brand() {
    return this.productForm.get('brand')
  }

  get category() {
    return this.productForm.get('category')
  }

}
