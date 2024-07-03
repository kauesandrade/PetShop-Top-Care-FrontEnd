import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Service } from 'src/app/feature/contact/interfaces/service';
import { ServiceVariant } from 'src/app/shared/interfaces/services/service-variant';

@Component({
  selector: 'app-service-variant-forms',
  templateUrl: './service-variant-forms.component.html',
  styleUrls: ['./service-variant-forms.component.scss']
})
export class ServiceVariantFormsComponent implements OnInit {

  @Input() serviceVariantsList!: Array<ServiceVariant>
  @Output() emitVariantForms: EventEmitter<FormBuilder> = new EventEmitter()

  faPlus = faPlus;
  faTrash = faTrash;
  faTimes = faTimes;

  variationsOpen = false;

  variantUpdate = "";

  variantForm = this.formBuilder.group({
    title: [''],
    code: [0],
    price: [0],
  })

  // variantFormArray = new FormArray([this.variantForm]);


  files: Array<File> = []

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  addVariants() {
    this.variationsOpen = true;
    this.variantUpdate = "";
    this.variantForm = this.formBuilder.group({
      title: [''],
      code: [0],
      price: [0],
    })
  
  }

  deleteVariant(serviceVariant: ServiceVariant) {
    this.serviceVariantsList.forEach(variant => {
      if (variant.variantCode == serviceVariant.variantCode) {
        this.serviceVariantsList.splice(this.serviceVariantsList.indexOf(variant), 1);
        if (this.variantForm.value.code == serviceVariant.variantCode) {
          this.variationsOpen = false;
        }
      }
    })
    //ADD NO product update
  }

  editSpecification(serviceVariant: ServiceVariant) {
    this.variantUpdate = serviceVariant.variantTitle!
    this.variationsOpen = true;
    this.variantForm = this.formBuilder.group({
      title: serviceVariant.variantTitle!,
      code: serviceVariant.variantCode!,
      price: serviceVariant.price!,
    })
  }

  updateVariant() {
    this.serviceVariantsList.forEach(serviceVariant => {
      if (serviceVariant.variantTitle == this.variantUpdate) {
        this.serviceVariantsList[this.serviceVariantsList.indexOf(serviceVariant)].variantTitle = this.variantForm.value.title!
        this.serviceVariantsList[this.serviceVariantsList.indexOf(serviceVariant)].variantCode = this.variantForm.value.code!
        this.serviceVariantsList[this.serviceVariantsList.indexOf(serviceVariant)].price = this.variantForm.value.price!
        this.variantUpdate = this.variantForm.value.title!
      }
    })
  }

  addVariant() {
    let serviceVariant: ServiceVariant = {
      variantCode: this.variantForm.value.code!,
      variantTitle: this.variantForm.value.title!,
      image: this.serviceVariantsList[0].image!,
      price: this.variantForm.value.price!,
      code: this.serviceVariantsList[0].code!,
      title: this.serviceVariantsList[0].title!,
      description: this.serviceVariantsList[0].description!,
      category: this.serviceVariantsList[0].category!,
      servedPets: []
    }

    if(serviceVariant.price != 0 && serviceVariant.variantCode != 0 && serviceVariant.variantTitle != ''){
      this.serviceVariantsList.push(serviceVariant);
      this.addVariants();
    }

  }

}
