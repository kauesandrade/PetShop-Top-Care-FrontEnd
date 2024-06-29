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

  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

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

}
