import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product/product';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { ProductSpecification } from 'src/app/shared/interfaces/product/product-specification';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';

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


  // ({
  //   code: [''],
  //   title: [''],
  //   littleDescription: [''],
  //   description: [''],
  //   // brand: ['']
  //   // specifications: Array<ProductSpecification>;
  //   // rating: number;
  //   // category: Array<Category>;
  //   // reviews?: Array<ProductReview>;
  // })


  productForm!: FormGroup;

  specificationForm = this.formBuilder.group({
    specifications: this.formBuilder.array([])
  })

  variantForm = this.formBuilder.group({
    variants: this.formBuilder.array([])
  })

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder) {
  }

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

    this.initSpecificationForm();
    this.initVariantForm();
    this.initProductForm();
  }

  sideBarOpen(evt: any) {
    this.isOpen = evt;
  }

  getProductForms(evt: any) {
    this.productForm = evt
  }

  getSpecificationsForms(evt: any) {
    this.specificationForm = evt
  }

  getVariantForms(evt: any) {
    this.getVariantForms = evt
  }

  initSpecificationForm() {
    // for (let specification of this.product!.specifications) {
    //   this.createNewSpecification(specification);
    // }
  }

  initVariantForm() {
    // for (let productVariant of this.productVariantsList) {
    //   this.createNewVariant(productVariant);
    // }
  }

  initProductForm() {

    this.productForm = this.formBuilder.group({
      code: [this.product?.code!, [Validators.required, EmptyValidator]],
      title: [this.product?.title!, [Validators.required, EmptyValidator]],
      littleDescription: [this.product?.littleDescription!, [Validators.required, EmptyValidator]],
      description: [this.product?.description!, [Validators.required, EmptyValidator]],
      brand: [this.product?.brand!, [Validators.required, EmptyValidator]],
      category: [this.product?.category!, [Validators.required, EmptyValidator]],
    })

  }

  createNewVariant(productVariant: ProductVariant) {
    (<FormArray>this.variantForm.controls.variants).push(
      this.formBuilder.group({
        title: [productVariant.title],
        code: [productVariant.code],
        stock: [''],
        price: [productVariant.price],
        images: [productVariant.images],
      })
    );
  }

  createNewSpecification(specification: ProductSpecification) {
    (<FormArray>this.specificationForm.controls.specifications).push(
      this.formBuilder.group({
        title: [specification.title],
        description: [specification.value],
      })
    )
  }


}
