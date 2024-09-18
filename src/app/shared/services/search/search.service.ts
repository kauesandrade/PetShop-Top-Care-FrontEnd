import { Injectable } from '@angular/core';
import productData from '../../../../assets/JsonFiles/products.json';
import { Product } from '../../interfaces/product/product';
import { ProductVariant } from '../../interfaces/product/product-variant';
import { ProductService } from '../product/product.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl = "http://localhost:8088/topcare/search";

  searchProducts(searchParams: HttpParams, productCategories: Array<number>): Observable<any>{
    return this.httpClient.put<any>(`${this.apiUrl}/product`, productCategories, {params: searchParams});
  }

  searchProductsDashboard(searchParams: HttpParams, productCategories: Array<number>): Observable<any>{
    return this.httpClient.put<any>(`${this.apiUrl}/dashboard/product`, productCategories, {params: searchParams});
  }

  



  // searchProducts(searchValue: string) {
  //   const searchValueList: Array<string> = searchValue.split(' ');

  //   let first = true;
  //   searchValueList.forEach((searchValueFind) => {
  //     if (first) {
  //       this.searchInProductData(searchValueFind);
  //       first = false;
  //     } else if (!first && this.productList.length > 0) {
  //       this.searchInProductList(searchValueFind);
  //     }
  //   });
  //   return this.productList;
  // }

  // getProductList() {
  //   return this.productList;
  // }

  // private searchInProductData(searchValueFind: string) {
  //   this.productList = [];

  //   productData.product.forEach((product) => {
  //     this.productService.findProduct(product);

  //     if (
  //       this.getTitleWithTypes(product).includes(
  //         this.formatString(searchValueFind)
  //       ) &&
  //       !this.productList.includes(this.productService.getFirstProductVariant()) &&
  //       this.verifyProductIsAvailable(this.productService.getFirstProductVariant())
  //     ) {
  //       this.productList.push(this.productService.getFirstProductVariant());
  //     }
  //   });
  // }

  // private searchInProductList(searchValueFind: string) {
  //   const productListFilter: Array<ProductVariant> = [];

  //   this.productList.forEach((product) => {
  //     if (
  //       this.getTitleWithTypes(product).includes(
  //         this.formatString(searchValueFind)
  //       ) &&
  //       this.productList.includes(product) &&
  //       this.verifyProductIsAvailable(product)
  //     ) {
  //       productListFilter.push(product);
  //     }
  //   });
  //   this.productList = productListFilter;
  // }

  // private verifyProductIsAvailable(product: ProductVariant) {
  //   if (product.available) {
  //     return true;
  //   }
  //   return false;
  // }

  // private getTitleWithTypes(product: Product) {

  //   let productTitle = product.title + ' ' + product.brand;

  //   this.productService.findProduct(product);
  //   this.productService.getProductVariants().forEach((variant) => {
  //     productTitle += ' ' + variant.variant;
  //   });
  //   return this.formatString(productTitle);
  // }

  // private formatString(value: string) {
  //   return value
  //     .normalize('NFD')
  //     .replace(/[\u0300-\u036f]/g, '')
  //     .toLowerCase();
  // }
}
