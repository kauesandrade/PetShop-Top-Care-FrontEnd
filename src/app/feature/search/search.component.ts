import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';
import { ProductResponseCard } from 'src/app/shared/interfaces/product/response/product-response-card';
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
  searchBy!: string;
  sortBy!: string;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private orderbyService: OrderByService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
    //   this.filterBy = params['categoria'];

    //   if (this.filterBy) {
    //     this.filterBy =
    //       this.filterBy.charAt(0).toUpperCase() + this.filterBy.slice(1);
    //     this.searchBy = this.filterBy;

    //     this.productsList = this.filterService.getAllProductsOfCategory([
    //       this.filterBy,
    //     ]);
    //   } else {
        this.searchBy = params['q'].replace('%20', ' ');
    //     this.productsList = this.searchService.searchProducts(this.searchBy);
    //   }
    //   this.productFilters = this.filterService.getListFilterWithChecked(
    //     this.productsList
    //   );

      const searchParams: HttpParams = new HttpParams().set(
        'search', this.searchBy
      ).set(
        'sortBy', this.sortBy
      ).set(
        'page', 0
      ).set(
        'size', 10
      );

      this.searchService.searchProducts(searchParams, [1]).subscribe((response) => {
        this.productsList = response;
      });
      
    });

  }

  getOrderBy(evt: string) {
    this.sortBy = evt;
  }

  getFilters(evt: Array<string>) {
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
}
