import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'src/app/shared/interfaces/product/image';

@Component({
  selector: 'app-variant-forms',
  templateUrl: './variant-forms.component.html',
  styleUrls: ['./variant-forms.component.scss']
})
export class VariantFormsComponent implements OnInit {


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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.variantForm = this.formBuilder.group({
      title: [''],
      code: [0],
      stock: [''],
      price: [0],
      images: [[]]
    })
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
    
    if(this.variantModal! == variant){
      this.clearInputs();
      this.variationsOpen = false;   
    }
  }
  
  
  editVariant(variant: number) {
    this.variantModal = variant
    this.variationsOpen = true;
    this.variantForm = this.formBuilder.group({
      title: [this.getTitle(this.variantModal!)?.value!],
      code: [this.getCode(this.variantModal!)?.value!],
      stock: [this.getStock(this.variantModal!)?.value!],
      price: [this.getPrice(this.variantModal!)?.value!],
      images: [this.getImages(this.variantModal!)]
    })
  }
  
  updateVariant() {
    
    const form = this.formBuilder.group({
      title: [this.variantForm.get("title")?.value],
      code: [this.variantForm.get("code")?.value],
      stock: [this.variantForm.get("stock")?.value],
      price: [this.variantForm.get("price")?.value],
      images: [this.variantForm.get("images")?.value]
    });

    (<FormArray>this.variantsForm.get("variants")).setControl(this.variantModal!, form as FormGroup);
  }


  
  addVariant() {
    this.variantModal = null
    this.variationsOpen = true;
    (<FormArray>this.variantsForm.get("variants")).push(this.variantForm)
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
      const image: Image = {
        name: img.name,
        src: reader.result!
      }

      const images: Array<Image> = []
      for(let img of this.variantForm.get("images")?.value){
        images.push(img)
      }
      images.push(image)
      
      this.variantForm = this.formBuilder.group({
        title: [this.variantForm.get("title")?.value],
        code: [this.variantForm.get("code")?.value],
        stock: [this.variantForm.get("stock")?.value],
        price: [this.variantForm.get("price")?.value],
        images: [images]
      });
      
    }
    
  }

  removeImage(id: number) {

    const images: Array<Image> = []
      for(let img of this.variantForm.get("images")?.value){
        images.push(img)
      }
    images.splice(id, 1)

    this.variantForm = this.formBuilder.group({
      title: [this.variantForm.get("title")?.value],
      code: [this.variantForm.get("code")?.value],
      stock: [this.variantForm.get("stock")?.value],
      price: [this.variantForm.get("price")?.value],
      images: [images]
    })
    
  }


  clearInputs(){
    this.variantForm = this.formBuilder.group({
      title: [],
      code: [],
      stock: [],
      price: [],
      images: [[]]
    })
  }
  
  
  get variants() {
    return this.variantsForm?.get('variants') as FormArray;
  }
  
  getTitle(index: number) {
    return (<FormGroup>this.variants.controls[index]).get('title');
  }
  
  getCode(index: number) {
    return (<FormGroup>this.variants.controls[index]).get('code');
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
  
  getImageForms(){
    return this.variantForm.get("images")
  }

}
