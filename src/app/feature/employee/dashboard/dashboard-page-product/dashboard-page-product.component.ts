import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/shared/interfaces/product/product';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { faPlus, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-page-product',
  templateUrl: './dashboard-page-product.component.html',
  styleUrls: ['./dashboard-page-product.component.scss']
})
export class DashboardPageProductComponent implements OnInit {

  product?: Product
  productVariantsList!: Array<ProductVariant>;
  id!: string;

  isOpen: boolean = false;
  titlePage = ""

  specificationsOpen = false;
  variationsOpen = false;

  faPlus = faPlus;
  faTrash = faTrash;
  faTimes = faTimes;


  productForm = this.formBuilder.group({
    code: [''],
    title: [''],
    littleDescription: [''],
    description: [''],
    // brand: ['']
    // specifications: Array<ProductSpecification>;
    // rating: number;
    // category: Array<Category>;
    // reviews?: Array<ProductReview>;
  })

  specificationForm = this.formBuilder.group({
    title: [''],
    description: [''],
  })

  variantForm = this.formBuilder.group({
    title: [''],
    code: [''],
    stock: [''],
    price: [''],
    images: [''],
  })

  // variantFormArray = new FormArray([this.variantForm]);


  files: Array<File> = []

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.findProduct(this.id);

    if (typeof this.productService.getProduct() == 'object') {
      this.product = this.productService.getProduct();
      this.productVariantsList = this.productService.getProductVariants();
      this.titlePage = 'Editar um Produto'
      console.log(this.product);
    } else {
      this.titlePage = 'Adicionar um Produto'
      console.log("sem objeto");
    }

  }

  sideBarOpen(evt: any) {
    this.isOpen = evt;
  }

  addSpecifications() {
    this.specificationsOpen = !this.specificationsOpen;
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

}
