import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';
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
  productsList: Array<ProductVariant> = [];
  productFilters: Array<Filter> = [];
  searchBy!: string;
  filterBy?: string;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private orderbyService: OrderByService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.filterBy = params['categoria'];

      if (this.filterBy) {
        this.filterBy =
          this.filterBy.charAt(0).toUpperCase() + this.filterBy.slice(1);
        this.searchBy = this.filterBy;

        this.productsList = this.filterService.getAllProductsOfCategory([
          this.filterBy,
        ]);
      } else {
        this.searchBy = params['q'].replace('%20', ' ');
        this.productsList = this.searchService.searchProducts(this.searchBy);
      }
      this.productFilters = this.filterService.getListFilterWithChecked(
        this.productsList
      );
    });
  }

  getOrderBy(evt: string) {
    this.productsList = this.orderbyService.orderOf(evt, this.productsList);
  }

  getFilters(evt: Array<string>) {
    if (this.filterBy) {
      this.productsList = this.filterService.filterProducts(
        evt,
        this.filterService.getAllProductsOfCategory([this.filterBy])
      );
    } else {
      this.productsList = this.filterService.filterProducts(
        evt,
        this.searchService.getProductList()
      );
    }
  }

  getFiltersProducts() {
    return this.productFilters;
  }
}
