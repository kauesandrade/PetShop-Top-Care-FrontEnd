import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { th } from 'date-fns/locale';
import { ProductResponseCard, ProductResponseSearchPageableDTO } from 'src/app/shared/interfaces/product/product';
import { ProductVariant, ProductVariantResponse } from 'src/app/shared/interfaces/product/product-variant';
import { FilterService } from 'src/app/shared/services/filter/filter.service';
import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.scss']
})
export class DashboardProductComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  isOpen: boolean = false;
  searchValue: string = '';
  sortBy: string = 'popularidade';
  productsList: Array<ProductResponseCard> = [];

  faSearch = faSearch;

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
  
  ngOnInit(): void {
    this.searchProducts();
  }

  sideBarOpen(evt: any){
    this.isOpen = evt;
  }

  handleClickSeach(){
    this.searchProducts();
  }

  getSortBy(evt: any){
    this.sortBy = evt;
    this.searchProducts();
  }

  verifyChar(evt: any){
    console.log(evt);
  }


  searchProducts(){
    const searchParams: HttpParams = new HttpParams().set(
      'searchValue', this.searchValue
    ).set(
      'sortBy', this.sortBy
    ).set(
      'page', 0
    ).set(
      'size', 10
    );

    this.searchService.searchProductsDashboard(searchParams, []).subscribe((response) => {
      this.productsList = response.content.map((product: ProductResponseSearchPageableDTO) => {
        return product;
      });
    });
  }
  

}
