import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductVariant } from 'src/app/shared/interfaces/product-variant';
import { FavoriteService } from 'src/app/shared/services/favorite/favorite.service';
import { FilterService } from 'src/app/shared/services/filter/filter.service';
import { OrderByService } from 'src/app/shared/services/orderBy/order-by.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  faSearch = faSearch;

  productsList!: Array<ProductVariant>;
  seachValue: string = "";
  
  constructor(private filterService: FilterService, private favoriteService: FavoriteService, private orderbyService: OrderByService, private routing: Router) { 
  }
  
  ngOnInit(): void {
    this.productsList = this.favoriteService.getAllProductfavorited();
  }
  
  getOrderBy(evt: string) {
    this.productsList = this.orderbyService.orderOf(evt, this.productsList);
  }

  getFilters(evt: Array<string>){
    this.productsList = this.filterService.filterProducts(evt, this.productsList);
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
