import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductVariant } from 'src/app/shared/interfaces/product-variant';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  faSearch = faSearch;

  productsList?: Array<ProductVariant>;
  seachValue: string = "";
  
  constructor(private productService: ProductService, private routing: Router) { 
  }
  
  ngOnInit(): void {
    this.productsList = this.productService.getAllProductfavorited();
  }
  
  getOrderBy(evt: string) {
    this.productsList = this.productService.orderOf(evt);
  }

  getFilters(evt: Array<string>){
    this.productsList = this.productService.filterProductOfCategory(evt);
  }

  handleClickSeach() {
    if(this.seachValue != ""){
      
    }
  }

  verifyChar(evt: any){
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 13) {
      this.handleClickSeach();
    }
  }
}
