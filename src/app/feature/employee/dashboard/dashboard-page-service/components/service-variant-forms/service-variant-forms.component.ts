import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { Service } from 'src/app/feature/contact/interfaces/service';
import { ServiceVariant } from 'src/app/shared/interfaces/services/service-variant';

@Component({
  selector: 'app-service-variant-forms',
  templateUrl: './service-variant-forms.component.html',
  styleUrls: ['./service-variant-forms.component.scss']
})
export class ServiceVariantFormsComponent implements OnInit {

  faPlus = faPlus;
  faTrash = faTrash;
  faTimes = faTimes;

  variationsOpen = false;
  variantModal?: number | null = 0;

  @Input() variantsForm!: FormGroup
  @Output() variantsFormChange = new EventEmitter<FormGroup>();

  @Output() deleteVariantForm = new EventEmitter<number>();
  @Output() addVariantForm = new EventEmitter<FormGroup>();

  variantForm!: FormGroup

  files: Array<File> = []

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.clearInputs();
  }

  addVariants() {
    this.variationsOpen = true;
    this.variantModal = null;
    this.clearInputs();
  }

  clearInputs(){
    this.variantForm = this.formBuilder.group({
      code: [, [Validators.required, EmptyValidator]],
      title: [, [Validators.required, EmptyValidator]],
      price: [, [Validators.required, EmptyValidator]]
    })
  }

  deleteVariant(variant: number) {
    (<FormArray>this.variantsForm.get("variants")).removeAt(variant)
    this.deleteVariantForm.emit(variant);
    this.variantsFormChange.emit(this.variantsForm)
    
    if(this.variantModal! == variant){
      this.clearInputs();
      this.variationsOpen = false;   
    }
  }
  
  
  editVariant(variant: number) {
    this.variantModal = variant
    console.log();
    this.variationsOpen = true;
    this.variantForm = this.formBuilder.group({
      code: [this.getCode(this.variantModal!)?.value!, [Validators.required, EmptyValidator]],
      title: [this.getTitle(this.variantModal!)?.value!, [Validators.required, EmptyValidator]],
      price: [this.getPrice(this.variantModal!)?.value!, [Validators.required, EmptyValidator]]
    })

    console.log(this.variantForm);
  }
  
  updateVariant() {
    
    const form = this.formBuilder.group({
      code: [this.variantForm.get("code")?.value, [Validators.required, EmptyValidator]],
      title: [this.variantForm.get("title")?.value, [Validators.required, EmptyValidator]],
      price: [this.variantForm.get("price")?.value, [Validators.required, EmptyValidator]]
    });

    (<FormArray>this.variantsForm.get("variants")).setControl(this.variantModal!, form as FormGroup);
  }


  
  addVariant() {
    this.variantModal = null
    this.variationsOpen = true;
    (<FormArray>this.variantsForm.get("variants")).push(this.variantForm)
    this.clearInputs()
  }


  get variants(){
    return this.variantsForm?.get('variants') as FormArray;
  }

  getTitle(index: number) {
    return (<FormGroup>this.variants.controls[index]).get("title");
  }

  getCode(index: number){
    return (<FormGroup>this.variants.controls[index]).get('code');
  }

  getPrice(index: number){
    return (<FormGroup>this.variants.controls[index]).get('price');
  }


  // deleteVariant(serviceVariant: ServiceVariant) {
  //   this.serviceVariantsList.forEach(variant => {
  //     if (variant.variantCode == serviceVariant.variantCode) {
  //       this.serviceVariantsList.splice(this.serviceVariantsList.indexOf(variant), 1);
  //       if (this.variantForm.value.code == serviceVariant.variantCode) {
  //         this.variationsOpen = false;
  //       }
  //     }
  //   })
  //   //ADD NO product update
  // }

  // editSpecification(serviceVariant: ServiceVariant) {
  //   this.variantUpdate = serviceVariant.variantTitle!
  //   this.variationsOpen = true;
  //   this.variantForm = this.formBuilder.group({
  //     title: serviceVariant.variantTitle!,
  //     code: serviceVariant.variantCode!,
  //     price: serviceVariant.price!,
  //   })
  // }

  // updateVariant() {
  //   this.serviceVariantsList.forEach(serviceVariant => {
  //     if (serviceVariant.variantTitle == this.variantUpdate) {
  //       this.serviceVariantsList[this.serviceVariantsList.indexOf(serviceVariant)].variantTitle = this.variantForm.value.title!
  //       this.serviceVariantsList[this.serviceVariantsList.indexOf(serviceVariant)].variantCode = this.variantForm.value.code!
  //       this.serviceVariantsList[this.serviceVariantsList.indexOf(serviceVariant)].price = this.variantForm.value.price!
  //       this.variantUpdate = this.variantForm.value.title!
  //     }
  //   })
  // }

  // addVariant() {
  //   let serviceVariant: ServiceVariant = {
  //     variantCode: this.variantForm.value.code!,
  //     variantTitle: this.variantForm.value.title!,
  //     image: this.serviceVariantsList[0].image!,
  //     price: this.variantForm.value.price!,
  //     code: this.serviceVariantsList[0].code!,
  //     title: this.serviceVariantsList[0].title!,
  //     description: this.serviceVariantsList[0].description!,
  //     category: this.serviceVariantsList[0].category!,
  //     servedPets: []
  //   }

  //   if(serviceVariant.price != 0 && serviceVariant.variantCode != 0 && serviceVariant.variantTitle != ''){
  //     this.serviceVariantsList.push(serviceVariant);
  //     this.addVariants();
  //   }

  // }

}
