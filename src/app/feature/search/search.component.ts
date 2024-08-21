import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ProductResponseCard } from 'src/app/shared/interfaces/product/product';
import { ProductResponseSearchPageableDTO } from 'src/app/shared/interfaces/product/product';
import { ProductCategoryResponse } from 'src/app/shared/interfaces/product/response/product-category-response';
import { Category } from 'src/app/shared/interfaces/search/category';
import { Filter } from 'src/app/shared/interfaces/search/filter';
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
  productFilters: Array<Filter> = [];
  productCategories: Array<ProductCategoryResponse> = [];
  searchBy!: string;
  sortBy!: string;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private orderbyService: OrderByService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchBy = params['q'].replace('%20', ' ');
      this.searchProducts();
    });

  }

  getOrderBy(evt: string) {
    this.sortBy = evt;
    this.searchProducts();
  }

  getFilters(evt: Array<string>) {

    this.searchProducts();

    // if (this.filterBy) {
    //   this.productsList = this.filterService.filterProducts(
    //     evt,
    //     this.filterService.getAllProductsOfCategory([this.filterBy])
    //   );
    // } else {
    //   this.productsList = this.filterService.filterProducts(
    //     evt,
    //     this.searchService.getProductList()
    //   );
    // }
  }

  getFiltersProducts() {
    return this.productFilters;
  }


  searchProducts() {
    const searchParams: HttpParams = new HttpParams().set(
      'searchValue', this.searchBy
    ).set(
      'sortBy', this.sortBy
    ).set(
      'page', 0
    ).set(
      'size', 10
    );

    this.searchService.searchProducts(searchParams, []).subscribe((response) => {
      this.productsList = response.content.map((product: ProductResponseSearchPageableDTO) => {
        return product.productCard;
      });

      this.productCategories = response.content.map((product: ProductResponseSearchPageableDTO) => {
        return product.categories;
      });
    });

  }

}
