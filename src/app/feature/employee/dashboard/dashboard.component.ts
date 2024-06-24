import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';
import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.searchProducts("");
    this.productList = this.searchService.getProductList();
  }

  productList: Array<ProductVariant> = []

  faSearch = faSearch;
  
  isOpen: boolean = false;

  sideBarOpen(evt: any){
    this.isOpen = evt;
  }


}
