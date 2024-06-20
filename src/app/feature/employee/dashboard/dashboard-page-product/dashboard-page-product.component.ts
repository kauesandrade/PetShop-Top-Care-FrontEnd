import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product/product';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'app-dashboard-page-product',
  templateUrl: './dashboard-page-product.component.html',
  styleUrls: ['./dashboard-page-product.component.scss']
})
export class DashboardPageProductComponent implements OnInit {

  product?: Product;
  productVariantsList!: Array<ProductVariant>;
  id!: string;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.findProduct(this.id);

    if(typeof this.productService.getProduct() == 'object'){
      this.product = this.productService.getProduct();
      console.log(this.product);
    }else{
      console.log("cu");
    }

  }



  isOpen: boolean = false;

  sideBarOpen(evt: any) {
    this.isOpen = evt;
  }

}
