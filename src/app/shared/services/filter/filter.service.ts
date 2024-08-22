import { Injectable } from '@angular/core';
import productData from '../../../../assets/JsonFiles/products.json';
import { Product } from '../../interfaces/product/product';
import { ProductVariant } from '../../interfaces/product/product-variant';
import { Category } from '../../interfaces/search/category';
import { CategoryGroupFiltersResponse, Filter } from '../../interfaces/search/filter';
import { ProductService } from '../product/product.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {

  constructor(private httpClient: HttpClient) {}

  private apiUrl = "http://localhost:8088/topcare/category/filters";

  getFilters(searchValue: string): Observable<Array<CategoryGroupFiltersResponse>> {
    return this.httpClient.get<Array<CategoryGroupFiltersResponse>>(this.apiUrl, {params: new HttpParams().set('searchValue', searchValue)});
  }
}
