import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductRequestPostDTO, ProductRequestPutDTO, ProductResponseCard, ProductResponsePageDTO, ProductResponsePageEditDTO } from '../../interfaces/product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  private apiUrl = "http://localhost:8088/topcare/product";
  
  constructor(private httpClient: HttpClient) {}
  
  getProductByCode(code: number): Observable<ProductResponsePageDTO> {
    return this.httpClient.get<ProductResponsePageDTO>(`${this.apiUrl}/${code}`);
  }

  getSimilarProductsByCode(code: number): Observable<ProductResponseCard>{
    return this.httpClient.get<ProductResponseCard>(`${this.apiUrl}/similar/${code}`);
  }

  getProductsByCategories(categories: Array<number>): Observable<ProductResponseCard>{
    return this.httpClient.put<ProductResponseCard>(`${this.apiUrl}/categories`, categories);
  }

  getProductByCodeToEdit(code: number): Observable<ProductResponsePageEditDTO> {
    return this.httpClient.get<ProductResponsePageEditDTO>(`${this.apiUrl}/dashboard/${code}`);
  }
  
  createProduct(product: ProductRequestPostDTO): Observable<ProductResponsePageDTO> {
    return this.httpClient.post<ProductResponsePageDTO>(`${this.apiUrl}/dashboard`, product);
  }
  
  editProduct(id: number, product: ProductRequestPutDTO): Observable<ProductResponsePageDTO> {
    return this.httpClient.put<ProductResponsePageDTO>(`${this.apiUrl}/dashboard/${id}`, product);
  }
  
  deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/dashboard/${id}`);
  }
}
