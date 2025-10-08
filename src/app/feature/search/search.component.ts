import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ProductResponseCard } from 'src/app/shared/interfaces/product/product';
import { ProductResponseSearchPageableDTO } from 'src/app/shared/interfaces/product/product';
import { ProductCategoryResponse } from 'src/app/shared/interfaces/product/response/product-category-response';
import { Category } from 'src/app/shared/interfaces/search/category';
import { CategoryGroupFiltersResponse, Filter } from 'src/app/shared/interfaces/search/filter';
import { FilterService } from 'src/app/shared/services/filter/filter.service';
import { OrderByService } from 'src/app/shared/services/orderBy/order-by.service';
import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  productsList: Array<ProductResponseCard> = [];
  productFilters: Array<CategoryGroupFiltersResponse> = [];
  productCategoriesChecked: Array<number> = [];
  searchValue: string = '';
  sortBy: string = "Popularidade";

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if(params['q']) {
        this.searchValue = params['q'].replace('%20', ' ');
      }else if(params['categoria']) {
        this.searchValue = params['categoria'].replace('%20', ' ');
      }

      this.searchProducts();
      this.filterService.getFilters(this.searchValue).subscribe((response) => {
        this.productFilters = response;
      });
    });

  }

  getOrderBy(evt: string) {
    this.sortBy = evt;
    this.searchProducts();
  }

  getFilters(evt: Array<number>) {
    this.productCategoriesChecked = evt;
    this.searchProducts();
  }

  searchProducts() {
    const searchParams: HttpParams = new HttpParams().set(
      'searchValue', this.searchValue
    ).set(
      'sortBy', this.sortBy
    ).set(
      'page', 0
    ).set(
      'size', 100
    );

    console.log(searchParams);

    this.searchService.searchProducts(searchParams, this.productCategoriesChecked).subscribe((response) => {
      this.productsList = response.content.map((product: ProductResponseSearchPageableDTO) => {
        return product;
      });
    });
  }

}
