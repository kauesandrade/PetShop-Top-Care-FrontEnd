import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductVariant } from 'src/app/shared/interfaces/product-variant';
import { FilterService } from 'src/app/shared/services/filter/filter.service';
import { OrderByService } from 'src/app/shared/services/orderBy/order-by.service';
import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  productsList: Array<ProductVariant> = [];
  seachBy!: string;

  constructor(private route: ActivatedRoute, private searchService: SearchService, private orderbyService: OrderByService, private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.seachBy = params['q'].replace('%20', ' ');
      this.productsList = this.searchService.searchProducts(this.seachBy);
    });
  }

  getOrderBy(evt: string) {
    this.productsList = this.orderbyService.orderOf(evt, this.productsList)
  }

  getFilters(evt: Array<string>) {
    this.productsList = this.filterService.filterProducts(evt, this.productsList);
  }

}
