import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';

@Component({
  selector: 'app-variant-forms',
  templateUrl: './variant-forms.component.html',
  styleUrls: ['./variant-forms.component.scss']
})
export class VariantFormsComponent implements OnInit {

  @Input() productVariantsList!: Array<ProductVariant>
  @Output() emitVariantForms: EventEmitter<FormBuilder> = new EventEmitter()

  faPlus = faPlus;
  faTrash = faTrash;
  faTimes = faTimes;

  variationsOpen = false;

  variantForm = this.formBuilder.group({
    title: [''],
    code: [''],
    stock: [''],
    price: [''],
    images: [''],
  })

  // variantFormArray = new FormArray([this.variantForm]);

  
  files: Array<File> = []

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  addVariant() {
    this.variationsOpen = !this.variationsOpen;
  }

  addImagesVariant(evt: any) {
    const fis: Array<File> = evt.target.files

    for(let i = 0; i < fis.length; i++){
      this.files.push(fis[i]);
    }

    // const reader = new FileReader();
    // reader.readAsDataURL(this.files[0]);
    // reader.onload = (_event) => {
    //   console.log(reader.result!);
    // };
    
    
    // this.variantForm.controls.images.setValue(files);
    
  }
  
  getImage(img: File){
    
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = (_event) => {
        // console.log(reader.result!);
        // return reader.result!;
      };
    
  }


  deleteVariant(variant: ProductVariant){
    this.productVariantsList?.forEach(productVariant =>{
      if(productVariant.variantCode == variant.variantCode){
        this.productVariantsList?.splice(this.productVariantsList?.indexOf(productVariant), 1);
      }
    })

    //ADD NO product update
  }

}
