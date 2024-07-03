import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/feature/contact/interfaces/service';

@Component({
  selector: 'app-service-variant-forms',
  templateUrl: './service-variant-forms.component.html',
  styleUrls: ['./service-variant-forms.component.scss']
})
export class ServiceVariantFormsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // @Input() productVariantsList!: Array<ProductVariant>
  // @Output() emitVariantForms: EventEmitter<FormBuilder> = new EventEmitter()

  // faPlus = faPlus;
  // faTrash = faTrash;
  // faTimes = faTimes;

  // variationsOpen = false;

  // variantUpdate = "";

  // variantForm = this.formBuilder.group({
  //   title: [''],
  //   code: [0],
  //   stock: [''],
  //   price: [0],
  //   images: [Array<File>]
  // })

  // // variantFormArray = new FormArray([this.variantForm]);


  // files: Array<File> = []

  // constructor(private formBuilder: FormBuilder) { }

  // ngOnInit(): void {
  // }

  // addImagesVariant(evt: any) {
  //   const files: Array<File> = evt.target.files

  //   for (let i = 0; i < files.length; i++) {
  //     this.files.push(files[i]);
  //   }

  // }

  // getImage(img: File){
  //     const reader = new FileReader();
  //     reader.readAsDataURL(img);
  //     return reader.result!
  // }


  // addVariants() {
  //   this.variationsOpen = true;
  //   this.variantUpdate = "";
  //   this.variantForm = this.formBuilder.group({
  //     title: [''],
  //     code: [0],
  //     stock: [''],
  //     price: [0],
  //     images: [Array<File>]
  //   })
  // }

  // deleteVariant(productVariant: ProductVariant) {
  //   this.productVariantsList.forEach(variant => {
  //     if (variant.variantCode == productVariant.variantCode) {
  //       this.productVariantsList.splice(this.productVariantsList.indexOf(variant), 1);
  //       if (this.variantForm.value.code == productVariant.variantCode) {
  //         this.variationsOpen = false;
  //       }
  //     }
  //   })
  //   //ADD NO product update
  // }

  // editSpecification(productVariant: ProductVariant) {
  //   this.variantUpdate = productVariant.variant!
  //   this.variationsOpen = true;
  //   this.variantForm = this.formBuilder.group({
  //     title: [productVariant.variant],
  //     code: [productVariant.variantCode],
  //     stock: [''],
  //     price: [productVariant.price],
  //     images: [Array<File>]
  //   })
  // }

  // updateVariant() {
  //   this.productVariantsList.forEach(productVariant => {
  //     if (productVariant.variant == this.variantUpdate) {
  //       this.productVariantsList[this.productVariantsList.indexOf(productVariant)].variant = this.variantForm.value.title!
  //       this.productVariantsList[this.productVariantsList.indexOf(productVariant)].variantCode = this.variantForm.value.code!
  //       this.productVariantsList[this.productVariantsList.indexOf(productVariant)].price = this.variantForm.value.price!
  //       // this.productVariantsList[this.productVariantsList.indexOf(productVariant)].stock = this.variantForm.value.stock!
  //       // this.productVariantsList[this.productVariantsList.indexOf(productVariant)].images = this.variantForm.value.images!
  //       this.variantUpdate = this.variantForm.value.title!
  //     }
  //   })
  // }

  // addVariant() {

  //   let ServiceVarinte: Service = {
  //     variantCode: this.variantForm.value.code!,
  //     variant: this.variantForm.value.title!,
  //     images: [],
  //     price: this.variantForm.value.price!,
  //     discountPrice: this.variantForm.value.price! - (this.variantForm.value.price! * 0.2),
  //     maxInterestFreeParcels: 1,
  //     subscribersPrice: this.variantForm.value.price! - (this.variantForm.value.price! * 0.15),
  //     available: true,
  //     code: this.productVariantsList[0].code,
  //     favorite: false,
  //     title: this.productVariantsList[0].title,
  //     littleDescription: this.productVariantsList[0].littleDescription,
  //     description: this.productVariantsList[0].description,
  //     brand: this.productVariantsList[0].brand,
  //     specifications: this.productVariantsList[0].specifications,
  //     rating: this.productVariantsList[0].rating,
  //     category: this.productVariantsList[0].category
  //   }

  //   if(productVariant.price != 0 && productVariant.code != 0 && productVariant.variant != ''){
  //     this.productVariantsList.push(productVariant);
  //     this.addVariants();
  //   }

  // }

}
