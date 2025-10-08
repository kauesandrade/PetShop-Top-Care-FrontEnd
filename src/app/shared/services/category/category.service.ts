import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategoryResponse } from '../../interfaces/product/response/product-category-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = "http://localhost:8088/topcare/category";

  constructor(private httpClient: HttpClient) { }


  getAllCategoriesGroup(): Observable<Array<ProductCategoryResponse>>{
    return this.httpClient.get<Array<ProductCategoryResponse>>(`${this.apiUrl}`);
  }

}
