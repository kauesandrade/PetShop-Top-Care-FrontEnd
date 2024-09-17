import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRequestPostDTO, ProductRequestPutDTO, ProductResponsePageDTO, ProductResponsePageEditDTO } from 'src/app/shared/interfaces/product/product';
import { ProductVariantResponsePostDTO, ProductVariantResponsePutDTO } from 'src/app/shared/interfaces/product/product-variant';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { ProductSpecificationsResponse } from 'src/app/shared/interfaces/product/product-specification';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { ProductCategoryResponse } from 'src/app/shared/interfaces/product/response/product-category-response';

@Component({
  selector: 'app-dashboard-page-product',
  templateUrl: './dashboard-page-product.component.html',
  styleUrls: ['./dashboard-page-product.component.scss']
})
export class DashboardPageProductComponent implements OnInit {

  product?: ProductResponsePageEditDTO;
  productVariantsList: Array<ProductVariantResponsePutDTO> = [];
  id!: number;

  isOpen: boolean = false;
  titlePage = ""

  productForm!: FormGroup;

  specificationsForm = this.formBuilder.group({
    specifications: this.formBuilder.array([] as ProductSpecificationsResponse[])
  })

  variantsForm = this.formBuilder.group({
    variants: this.formBuilder.array([] as ProductVariantResponsePutDTO[])
  })

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if (this.id == undefined) {
      this.titlePage = 'Adicionar um Produto'
      console.log("sem objeto");
      this.initProductForm();
      this.initVariantForm();
      this.initSpecificationForm();
    } else {
      this.productService.getProductByCodeToEdit(this.id).subscribe((response) => {
        this.product = response;
        this.productVariantsList = response.variants;
        console.log(this.product);
        this.titlePage = 'Editar um Produto';

        this.initProductForm();
        this.initVariantForm();
        this.initSpecificationForm();
      });
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

    let categoryArray: Array<ProductCategoryResponse> = [];

    if (this.product?.categories) {
      categoryArray = this.product.categories;
    }

    this.productForm = this.formBuilder.group({
      code: [this.product?.code || ""],
      title: [this.product?.title || "", [Validators.required, EmptyValidator]],
      shortDescription: [this.product?.shortDescription || "", [Validators.required, EmptyValidator]],
      description: [this.product?.description || "", [Validators.required, EmptyValidator]],
      brand: [this.product?.brand || null, [Validators.required, EmptyValidator]],
      category: [categoryArray!],
    })
    this.productForm.get('code')?.value > 0 ? this.productForm.get('code')?.disable() : this.productForm.get('code')?.enable();

  }

  createNewSpecification(specification: ProductSpecificationsResponse) {
    (<FormArray>this.specificationsForm.controls.specifications).push(
      this.formBuilder.group({
        id: [specification.id || 0],
        title: [specification.title || "", [Validators.required, EmptyValidator]],
        description: [specification.description || "", [Validators.required, EmptyValidator]],
      })
    )
  }

  createNewVariant(productVariant: ProductVariantResponsePutDTO) {

    const images = []
    for (let image of productVariant.images) {
      images.push(image);
    }

    const variant = this.formBuilder.group({
      variantId: [productVariant.variantId || 0],
      variantTitle: [productVariant.variantTitle || "", [Validators.required, EmptyValidator]],
      variantCode: [productVariant.variantCode || 0, [Validators.required, EmptyValidator]],
      stock: [productVariant.stock || 0,],
      price: [productVariant.price || 0.0, ],
      images: [images],
      discount: [productVariant?.discount|| 0]
    });

    (<FormArray>this.variantsForm.controls.variants).push(variant);
  }


  addProduct() {

    var specificationsList: Array<ProductSpecificationsResponse> = [];

    if (this.specificationsForm.value.specifications) {
      for (let specification of this.specificationsForm.value.specifications) {
        specificationsList.push(specification!);
      }
    }

    var variantsList: Array<ProductVariantResponsePostDTO> = [];

    if (this.variantsForm.value.variants) {
      for (let variant of this.variantsForm.value.variants) {
        
        const variantDTO: ProductVariantResponsePostDTO = {
          variantTitle: variant!.variantTitle,
          variantCode: variant!.variantCode,
          price: variant!.price,
          discount: variant!.discount,
          stock: variant!.stock,
          images: variant!.images
        }
        variantsList.push(variantDTO);
      }
    }

    const productCreateDTO: ProductRequestPostDTO = {
      code: this.productForm.value.code,
      title: this.productForm.value.title,
      description: this.productForm.value.description,
      shortDescription: this.productForm.value.shortDescription,
      idBrand: this.productForm.value.brand.id,
      specifications: specificationsList,
      idsCategories: this.productForm.value.category.map((category: ProductCategoryResponse) => category.id),
      variants: variantsList
    }
    console.log(productCreateDTO);

    this.productService.createProduct(productCreateDTO).subscribe((response) => {
      console.log(response.title + " criado");
      this.router.navigate(['/dashboard/produtos']);
    });

  }

  updateProduct() {
    var specificationsList: Array<ProductSpecificationsResponse> = [];

    if (this.specificationsForm.value.specifications) {
      for (let specification of this.specificationsForm.value.specifications) {
        specificationsList.push(specification!);
      }
    }

    var variantsList: Array<ProductVariantResponsePutDTO> = [];
    if (this.variantsForm.value.variants) {
      for (let variant of this.variantsForm.value.variants) {
        variantsList.push(variant!);
      }
    }

    const productPutDTO: ProductRequestPutDTO = {
      title: this.productForm.value.title,
      description: this.productForm.value.description,
      shortDescription: this.productForm.value.shortDescription,
      idBrand: this.productForm.value.brand.id,
      specifications: specificationsList,
      idsCategories: this.productForm.value.category.map((category: ProductCategoryResponse) => category.id),
      variants: variantsList
    }

    console.log(productPutDTO);
    console.log("tentando editar");
    this.productService.editProduct(this.id, productPutDTO).subscribe((response) => {
      console.log(response.code + " editado");
      this.router.navigate(['/dashboard/produtos']);
    });
  }

  areFormsValid() {
    return (
      this.productForm.valid && this.specificationsForm.valid && this.variantsForm.valid
      // true
    );
  }

}
