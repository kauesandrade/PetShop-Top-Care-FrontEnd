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

  variantUpdate = "";

  variantForm = this.formBuilder.group({
    title: [''],
    code: [0],
    stock: [''],
    price: [0],
    images: ['']
  })

  // variantFormArray = new FormArray([this.variantForm]);


  files: Array<File> = []

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  addImagesVariant(evt: any) {
    const fis: Array<File> = evt.target.files

    for (let i = 0; i < fis.length; i++) {
      this.files.push(fis[i]);
    }

    // const reader = new FileReader();
    // reader.readAsDataURL(this.files[0]);
    // reader.onload = (_event) => {
    //   console.log(reader.result!);
    // };


    // this.variantForm.controls.images.setValue(files);

  }

  getImage(img: File) {

    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = (_event) => {
      // console.log(reader.result!);
      // return reader.result!;
    };

  }


  addSpecifications() {
    this.variationsOpen = true;
    this.variantUpdate = "";
    this.variantForm = this.formBuilder.group({
      title: [''],
      code: [0],
      stock: [''],
      price: [0],
      images: ['']
    })
  }

  deleteVariant(productVariant: ProductVariant) {
    this.productVariantsList.forEach(variant => {
      if (variant.variantCode == productVariant.variantCode) {
       this.productVariantsList.splice(this.productVariantsList.indexOf(variant), 1);
        if (this.variantForm.value.code == productVariant.variantCode) {
          this.variationsOpen = false;
        }
      }
    })
    //ADD NO product update
  }

  editSpecification(productVariant: ProductVariant) {
    this.variantUpdate = productVariant.variant!
    this.variationsOpen = true;
    this.variantForm = this.formBuilder.group({
      title: [productVariant.variant],
      code: [productVariant.variantCode],
      stock: [''],
      price: [productVariant.price],
      images: ['']
    })
  }

  updateVariant() {
    this.productVariantsList.forEach(productVariant => {
      if (productVariant.variant == this.variantUpdate) {
        this.productVariantsList[this.productVariantsList.indexOf(productVariant)].variant = this.variantForm.value.title!
        this.productVariantsList[this.productVariantsList.indexOf(productVariant)].variantCode = this.variantForm.value.code!
        this.productVariantsList[this.productVariantsList.indexOf(productVariant)].price = this.variantForm.value.price!
        // this.productVariantsList[this.productVariantsList.indexOf(productVariant)].stock = this.variantForm.value.stock!
        // this.productVariantsList[this.productVariantsList.indexOf(productVariant)].images = this.variantForm.value.images!
        this.variantUpdate = this.variantForm.value.title!
      }
    })
  }

  addVariant() {
    // let productVariant: Pro = {
    //   title: this.variantForm.value.title!,
    //   code: this.variantForm.value.code!,
    //   stock: [''],
    //   price: this.variantForm.value.price!,
    //   images: ['']
    // }

    // this.product?.specifications.push(specification);
    // this.addSpecifications();
  }

}
