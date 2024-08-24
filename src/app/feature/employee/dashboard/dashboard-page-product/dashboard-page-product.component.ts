import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductResponsePageDTO } from 'src/app/shared/interfaces/product/product';
import { ProductVariant, ProductVariantResponse } from 'src/app/shared/interfaces/product/product-variant';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { ProductSpecification, ProductSpecificationsResponse } from 'src/app/shared/interfaces/product/product-specification';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';

@Component({
  selector: 'app-dashboard-page-product',
  templateUrl: './dashboard-page-product.component.html',
  styleUrls: ['./dashboard-page-product.component.scss']
})
export class DashboardPageProductComponent implements OnInit {

  product?: ProductResponsePageDTO;
  productVariantsList: Array<ProductVariantResponse> = [];
  id!: number;

  isOpen: boolean = false;
  titlePage = ""

  productForm!: FormGroup;

  specificationsForm = this.formBuilder.group({
    specifications: this.formBuilder.array([])
  })

  variantsForm = this.formBuilder.group({
    variants: this.formBuilder.array([])
  })

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // this.productService.get

    if (typeof this.productService.getProductByCode(this.id).subscribe((response) =>{ return response}) != 'undefined') {

      this.productService.getProductByCode(this.id).subscribe((response) => {
        this.product = response;
        this.productVariantsList = response.variants;
        console.log(this.product);

        this.initSpecificationForm();
        this.initVariantForm();
        this.initProductForm();
      });

      this.titlePage = 'Editar um Produto';

    } else {
      this.titlePage = 'Adicionar um Produto'
      console.log("sem objeto");
      this.initSpecificationForm();
      this.initVariantForm();
      this.initProductForm();
    }


  }

  sideBarOpen(evt: any) {
    this.isOpen = evt;
  }

  initSpecificationForm() {
    if (this.product) {
      for (let specification of this.product!.specifications) {
        this.createNewSpecification(specification);
      }
    }
  }

  initVariantForm() {
    if (this.product) {
      for (let productVariant of this.productVariantsList) {
        this.createNewVariant(productVariant);
      }
    }

  }

  initProductForm() {

    const categoryArray = []

    if (this.product?.categories) {
      for (let cateogoryName of this.product?.categories!) {
        for (let type of cateogoryName.title) {
          categoryArray.push(type)
        }
      }
    }

    this.productForm = this.formBuilder.group({
      code: [this.product?.code!, [Validators.required, EmptyValidator]],
      title: [this.product?.title!, [Validators.required, EmptyValidator]],
      littleDescription: [this.product?.shortDescription!, [Validators.required, EmptyValidator]],
      description: [this.product?.description!, [Validators.required, EmptyValidator]],
      brand: [this.product?.brand!, [Validators.required, EmptyValidator]],
      category: [categoryArray],
    })

  }

  createNewSpecification(specification: ProductSpecificationsResponse) {
    (<FormArray>this.specificationsForm.controls.specifications).push(
      this.formBuilder.group({
        title: [specification.title!, [Validators.required, EmptyValidator]],
        description: [specification.description!, [Validators.required, EmptyValidator]],
      })
    )
  }

  createNewVariant(productVariant: ProductVariantResponse) {

    const images = []
    for (let image of productVariant.images) {
      images.push(image);
    }

    const variant = this.formBuilder.group({
      title: [productVariant.variantTitle!, [Validators.required, EmptyValidator]],
      code: [productVariant.variantCode!, [Validators.required, EmptyValidator]],
      stock: [0],
      price: [productVariant.price!, [Validators.required, EmptyValidator]],
      images: [images],
      discount: [productVariant.discountPrice!]
    });

    (<FormArray>this.variantsForm.controls.variants).push(variant);
  }


  addProduct() {
    console.log(this.productForm)
    console.log(this.specificationsForm)
    console.log(this.variantsForm)

  }

  updateProduct() {
    console.log(this.productForm)
    console.log(this.specificationsForm)
    console.log(this.variantsForm)
  }

  areFormsValid() {
    return (
      this.productForm.valid && this.specificationsForm.valid && this.variantsForm.valid
    );
  }

}
