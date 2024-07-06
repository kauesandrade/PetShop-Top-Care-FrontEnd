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

  @Input() specificationsForm!: FormGroup
  @Output() specificationsFormChange = new EventEmitter<FormGroup>();
  @Output() deleteSpecificationForm = new EventEmitter<number>();
  @Output() addSpecificationForm = new EventEmitter<FormGroup>();

  specificationsOpen = false;
  
  specificationForm!: FormGroup
  specificationModal?: number | null = null;
  
  faPlus = faPlus;
  faTrash = faTrash;
  faTimes = faTimes;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.clearInputs();
  }

  addSpecifications() {
    this.specificationsOpen = true;
    this.specificationModal = null;
    this.clearInputs();
  }

  editSpecification(specification: number) {
    this.specificationModal = specification;
    this.specificationsOpen = true;
    this.specificationForm = this.formBuilder.group({
      title: [this.getTitle(specification)?.value!],
      description: [this.getDescription(specification)?.value!],
    })
  }

  updateSpecification() {
    const form = this.formBuilder.group({
      title: [this.specificationForm.get('title')?.value!],
      description: [this.specificationForm.get('description')?.value!],
    });
    (<FormArray>this.specificationsForm.get("specifications")).setControl(this.specificationModal!, form as FormGroup);
    this.specificationsFormChange.emit(this.specificationsForm)
  }

  addSpecification() {
    (<FormArray>this.specificationsForm.get("specifications")).push(this.specificationForm)
    this.addSpecificationForm.emit(this.specificationForm);
    this.specificationsFormChange.emit(this.specificationsForm)
    this.clearInputs();
  }

  deleteSpecification(specification: number) {
    (<FormArray>this.specificationsForm.get("specifications")).removeAt(specification);
    this.deleteSpecificationForm.emit(specification);
    this.specificationsFormChange.emit(this.specificationsForm)

    if(this.specificationModal! == specification){
      this.addSpecifications();
      this.specificationsOpen = false;
    }
  }

  clearInputs(){
    this.specificationForm = this.formBuilder.group({
      title: [''],
      description: [''],
    })
  }

  get specifications() {
    return this.specificationsForm?.get('specifications') as FormArray;
  }

  getTitle(index: number) {
    return (<FormGroup>this.specifications.controls[index]).get('title');
  }

  getDescription(index: number) {
    return (<FormGroup>this.specifications.controls[index]).get('description');
  }

}
