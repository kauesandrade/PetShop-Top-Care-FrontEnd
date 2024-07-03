import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { Product } from 'src/app/shared/interfaces/product/product';
import { ProductSpecification } from 'src/app/shared/interfaces/product/product-specification';

@Component({
  selector: 'app-specifications-forms',
  templateUrl: './specifications-forms.component.html',
  styleUrls: ['./specifications-forms.component.scss']
})
export class SpecificationsFormsComponent implements OnInit {

  @Input() specificationForm!: FormGroup
  @Output() emitSpecificationForms: EventEmitter<FormBuilder> = new EventEmitter()

  specificationsOpen = false;

  faPlus = faPlus;
  faTrash = faTrash;
  faTimes = faTimes;

  // specificationForm = this.formBuilder.group({
  //   title: ['',[Validators.required, EmptyValidator]],
  //   description: [''],
  // })

  specificationUpdate = 0;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  addSpecifications() {
    // this.specificationsOpen = true;
    // this.specificationUpdate = "";
    // this.specificationForm = this.formBuilder.group({
    //   title: [''],
    //   description: [''],
    // })
  }

  deleteSpecification(specification: any) {
    // this.product?.specifications.forEach(specificationProduct => {
    //   if (specificationProduct.value == specification.value) {
    //     this.product?.specifications.splice(this.product?.specifications.indexOf(specificationProduct), 1);
    //     if (this.specificationForm.value.title == specificationProduct.title) {
    //       this.specificationsOpen = false;
    //     }
    //   }
    // })
    //ADD NO product update
  }

  editSpecification(specification: number) {
    this.specificationUpdate = specification + 1;
    this.specificationsOpen = true;
    this.specificationForm 
  }

  updateSpecification() {
    // this.product?.specifications.forEach(specificationProduct => {
    //   if (specificationProduct.title == this.specificationUpdate) {
    //     this.product!.specifications[this.product!.specifications.indexOf(specificationProduct)].title = this.specificationForm.value.title!;
    //     this.product!.specifications[this.product!.specifications.indexOf(specificationProduct)].value = this.specificationForm.value.description!;
    //     this.specificationUpdate = this.specificationForm.value.title!
    //   }
    // })
  }

  addSpecification(){
    // let specification: ProductSpecification = {
    //   title: this.specificationForm.value.title!,
    //   value: this.specificationForm.value.description!
    // }

    // this.product?.specifications.push(specification);
    // this.addSpecifications();
  }

  get specifications() {
    return this.specificationForm?.get('specifications') as FormArray;
  }

  getTitle(index: number) {
    return (<FormGroup>this.specifications.controls[index]).get('title');
  }
  getValue(index: number) {
    return (<FormGroup>this.specifications.controls[index]).get('value');
  }

  getSpecification(index: number){
    return (<FormGroup>this.specifications.controls[index]);
  }

}
