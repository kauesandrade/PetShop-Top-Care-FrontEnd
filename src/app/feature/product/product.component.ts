import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  product?: Product;
  id?: any;
  category1: Array<string> = ["oferta"];

  constructor(private route: ActivatedRoute, private routing: Router, private productService: ProductService) { 
    this.id = this.route.snapshot.paramMap.get("id")?.replace("%20", " ");
    this.product = productService.findProduct(this.id);
    console.log(this.product);
    this.verifyProduct();
  }

  ngOnInit(): void {
  }
  
  verifyProduct(){
    if(!this.product){
      this.routing.navigate(['/']);
    }
  }
}
