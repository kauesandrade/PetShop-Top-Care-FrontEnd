import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlus, faTimes, faTrash, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { Image, ImageResponsePutDTO } from 'src/app/shared/interfaces/product/image';

@Component({
  selector: 'app-product-variant-forms',
  templateUrl: './product-variant-forms.component.html',
  styleUrls: ['./product-variant-forms.component.scss']
})
export class ProductVariantFormsComponent implements OnInit {

  @Input() variantsForm!: FormGroup
  @Output() variantsFormChange = new EventEmitter<FormGroup>();
  @Output() deleteVariantForm = new EventEmitter<number>();
  @Output() addVariantForm = new EventEmitter<FormGroup>();


  variationsOpen = false;

  variantForm!: FormGroup
  variantModal?: number | null = 0;

  files: Array<Image> = []

  faPlus = faPlus;
  faTrash = faTrash;
  faTimes = faTimes;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.clearInputs()
  }


  addVariants() {
    this.variationsOpen = true;
    this.variantModal = null;
    this.clearInputs();
  }

  deleteVariant(variant: number) {
    (<FormArray>this.variantsForm.get("variants")).removeAt(variant)
    this.deleteVariantForm.emit(variant);
    this.variantsFormChange.emit(this.variantsForm)

    if (this.variantModal! == variant) {
      this.clearInputs();
      this.variationsOpen = false;
    }
  }


  editVariant(variant: number) {
    this.variantModal = variant
    this.variationsOpen = true;
    this.variantForm = this.formBuilder.group({
      variantTitle: [this.getVariantTitle(this.variantModal!)?.value!, [Validators.required, EmptyValidator]],
      variantCode: [this.getVariantCode(this.variantModal!)?.value!, [Validators.required, EmptyValidator]],
      stock: [this.getStock(this.variantModal!)?.value! || 0],
      price: [this.getPrice(this.variantModal!)?.value!, [Validators.required, EmptyValidator]],
      images: [this.getImages(this.variantModal!)],
      discount: [this.getDiscount(this.variantModal!)?.value!]
    })
  }

  updateVariant() {

    const form = this.formBuilder.group({
      variantId: [this.variantForm.get("variantId")?.value || null],
      variantTitle: [this.variantForm.get("variantTitle")?.value, [Validators.required, EmptyValidator]],
      variantCode: [this.variantForm.get("variantCode")?.value, [Validators.required, EmptyValidator]],
      stock: [this.variantForm.get("stock")?.value || 0],
      price: [this.variantForm.get("price")?.value, [Validators.required, EmptyValidator]],
      images: [this.variantForm.get("images")?.value],
      discount: [this.variantForm.get("discount")?.value!]
    });

    console.log(form.value);

    (<FormArray>this.variantsForm.get("variants")).setControl(this.variantModal!, form as FormGroup);
  }



  addVariant() {
    this.variantModal = null
    this.variationsOpen = true;
    (<FormArray>this.variantsForm.get("variants")).push(this.variantForm)
    console.log(this.variantsForm.value);
    this.clearInputs()
  }


  addImagesVariant(evt: any) {
    const files: Array<File> = evt.target.files

    for (let i = 0; i < files.length; i++) {
      this.setImages(files[i]);
    }
  }

  setImages(img: File) {
    const reader = new FileReader();
    reader.readAsDataURL(img);

    reader.onload = () => {
      const image: ImageResponsePutDTO = {
        id: null,
        name: img.name,
        type: img.type,
        size: img.size,
        url: reader.result as string,
        file: img
      }

      const images: Array<ImageResponsePutDTO> = []
      for (let img of this.variantForm.get("images")?.value) {
        images.push(img)
      }
      images.push(image)

      this.saveImagesForms(images);
    }

  }

  removeImage(id: number) {

    const images: Array<ImageResponsePutDTO> = []
    for (let img of this.variantForm.get("images")?.value) {
      images.push(img)
    }
    images.splice(id, 1)

    this.saveImagesForms(images);
  }


  clearInputs() {
    this.variantForm = this.formBuilder.group({
      variantTitle: ['', [Validators.required, EmptyValidator]],
      variantCode: [, [Validators.required, EmptyValidator]],
      stock: [],
      price: [, [Validators.required, EmptyValidator]],
      images: [[]],
      discount: [0]
    })
  }

  passUpImage(index: number) {
    const images: Array<ImageResponsePutDTO> = []
    for (let img of this.variantForm.get("images")?.value) {
      images.push(img)
    }

    let img: ImageResponsePutDTO = images[index]


    if ((index - 1) != -1) {
      images.splice(index, 1);
      images.splice((index - 1), 0, img);
    }

    this.saveImagesForms(images)
  }

  passDownImage(index: number) {
    const images: Array<ImageResponsePutDTO> = []
    for (let img of this.variantForm.get("images")?.value) {
      images.push(img)
    }

    let img: ImageResponsePutDTO = images[index]

    if ((index + 1) != images.length + 1) {
      images.splice(index, 1);
      images.splice((index + 1), 0, img);
    }

    this.saveImagesForms(images)
  }

  saveImagesForms(images: Array<ImageResponsePutDTO>) {
    this.variantForm = this.formBuilder.group({
      variantTitle: [this.variantForm.get("variantTitle")?.value!, [Validators.required, EmptyValidator]],
      variantCode: [this.variantForm.get("variantCode")?.value!, [Validators.required, EmptyValidator]],
      stock: [this.variantForm.get("stock")?.value!],
      price: [this.variantForm.get("price")?.value!, [Validators.required, EmptyValidator]],
      images: [images!],
      discount: [this.variantForm.get("discount")?.value!]
    })
  }


  get variants() {
    return this.variantsForm?.get('variants') as FormArray;
  }

  getVariantTitle(index: number) {
    return (<FormGroup>this.variants.controls[index]).get('variantTitle');
  }

  getVariantCode(index: number) {
    return (<FormGroup>this.variants.controls[index]).get('variantCode');
  }

  getStock(index: number) {
    return (<FormGroup>this.variants.controls[index]).get('stock');
  }

  getPrice(index: number) {
    return (<FormGroup>this.variants.controls[index]).get('price');
  }

  getImages(index: number) {

    if (index == null) {
      return []
    }
    return ((<FormGroup>this.variants.controls[index]).get('images') as FormArray).value;

  }

  getImageForms() {
    return this.variantForm.get("images")
  }

  getDiscount(index: number) {
    return (<FormGroup>this.variants.controls[index]).get('discount');
  }
}
