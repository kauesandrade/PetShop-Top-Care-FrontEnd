import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';
import { FilterService } from 'src/app/shared/services/filter/filter.service';
import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.scss']
})
export class DashboardProductComponent implements OnInit {

  constructor(private searchService: SearchService, private filterService: FilterService) { }

  ngOnInit(): void {
    // this.searchService.searchProducts("");
    this.productList = this.searchService.getProductList();
  }

  productList: Array<ProductVariant> = []

  faSearch = faSearch;
  
  isOpen: boolean = false;
  seachValue: string = '';

  typesOrderBy = [
    'Popularidade',
    "Maior Estoque",
    "Menor Estoque",
    "Maior Preço",
    "Menor Preço",
    'Maiores Descontos',
    'Nome (A-Z)',
    'Nome (Z-A)'
  ]

  sideBarOpen(evt: any){
    this.isOpen = evt;
  }

  handleClickSeach(){

  }

  getOrderBy(evt: any){
    console.log(evt);
  }

  verifyChar(evt: any){
    console.log(evt);
  }
  

}
