import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';
import { Filter } from 'src/app/shared/interfaces/search/filter';
import { FavoriteService } from 'src/app/shared/services/favorite/favorite.service';
import { FilterService } from 'src/app/shared/services/filter/filter.service';
import { OrderByService } from 'src/app/shared/services/orderBy/order-by.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  faSearch = faSearch;

  productsList!: Array<ProductVariant>;
  productFilters!: Array<Filter>;
  applyFilters: Array<string> = [];
  seachValue: string = '';

  constructor(
    private filterService: FilterService,
    private favoriteService: FavoriteService,
    private orderbyService: OrderByService,
    private routing: Router
  ) {}

  ngOnInit(): void {
    this.productsList = this.favoriteService.getAllProductfavorited();
    this.productFilters = this.filterService.getListFilterWithChecked(
      this.productsList
    );
  }

  getOrderBy(evt: string) {
    this.productsList = this.orderbyService.orderOf(evt, this.productsList);
  }

  getFilters(evt: Array<string>) {
    this.applyFilters = evt;
    if (!this.seachValue) {
      this.productsList = this.filterService.filterProducts(
        evt,
        this.favoriteService.getAllProductfavorited()
      );
    } else {
      this.productsList = this.filterService.filterProducts(
        evt,
        this.favoriteService.searchProducts(
          this.seachValue,
          this.favoriteService.getAllProductfavorited()
        )
      );
    }
  }

  handleClickSeach() {
    this.productsList = this.filterService.filterProducts(
      this.applyFilters,
      this.favoriteService.searchProducts(
        this.seachValue,
        this.favoriteService.getAllProductfavorited()
      )
    );
  }

  verifyChar(evt: any) {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode == 13) {
      this.handleClickSeach();
    }
  }
}
