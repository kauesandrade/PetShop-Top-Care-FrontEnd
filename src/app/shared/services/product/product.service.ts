import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductRequestCreateDTO, ProductRequestEditDTO, ProductResponseCard, ProductResponsePageDTO, ProductResponsePageEditDTO } from '../../interfaces/product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  private apiUrl = "http://localhost:8088/topcare/product";
  
  constructor(private httpClient: HttpClient) {}
  
  getProductByCode(code: number): Observable<ProductResponsePageDTO> {
    return this.httpClient.get<ProductResponsePageDTO>(`${this.apiUrl}/${code}`);
  }

  getProductByCodeToEdit(code: number): Observable<ProductResponsePageEditDTO> {
    return this.httpClient.get<ProductResponsePageEditDTO>(`${this.apiUrl}/edit/${code}`);
  }

  getSimilarProductsByCode(code: number): Observable<ProductResponseCard>{
    return this.httpClient.get<ProductResponseCard>(`${this.apiUrl}/similar/${code}`);
  }

  getProductsByCategories(categories: Array<number>): Observable<ProductResponseCard>{
    return this.httpClient.put<ProductResponseCard>(`${this.apiUrl}/categories`, categories);
  }
  
  createProduct(product: ProductRequestCreateDTO): Observable<ProductResponsePageDTO> {
    return this.httpClient.post<ProductResponsePageDTO>(this.apiUrl, product);
  }
  
  editProduct(id: number, product: ProductRequestEditDTO): Observable<ProductResponsePageDTO> {
    return this.httpClient.put<ProductResponsePageDTO>(`${this.apiUrl}/${id}`, product);
  }
  
  deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  
  
  
  
  
  // private product?: Product;
  // private productVariant!: ProductVariant;
  // private productVariantsList!: Array<ProductVariant>;

  // getProduct() {
  //   return this.product;
  // }

  // getProductData(){
  //   return productData.product;
  // }

  // getProductVariants() {
  //   return this.productVariantsList;
  // }

  // getProductVariant() {
  //   return this.productVariant;
  // }

  // changeVariableProduct(productVariant: ProductVariant) {
  //   this.productVariant = productVariant;
  // }
  // getFirstProductVariant() {
  //   return this.getProductVariants()[0];
  // }

  // findProduct(id: number | string | Product | ProductVariant) {
  //   if (typeof id == 'number' || typeof id == 'string') {
  //     for (const productFind of productData.product) {
  //       if (productFind.title == id || productFind.code == id) {
  //         this.product = productFind;
  //         break;
  //       }
  //     }
  //   } else {
  //     this.product = id;
  //   }

  //   if (this.product) {
  //     this.getAllProductVariants();
  //     this.changeVariableProduct(this.getFirstProductVariant());
  //   }
  // }

  // private getAllProductVariants() {
  //   this.productVariantsList = [];
  //   for (const variant of productVariantData.variant as ProductVariant[]) {
  //     if (
  //       this.product?.code == variant.code &&
  //       this.verifyProductIsAvailable(variant)
  //     ) {
  //       this.productVariantsList.push(variant);
  //     }
  //   }

  //   this.productVariantsList = this.productVariantsList.sort((p1, p2) => {
  //     return p1.variant.localeCompare(p2.variant);
  //   });

  //   return this.productVariantsList;
  // }

  // private verifyProductIsAvailable(product: ProductVariant) {
  //   if (product.available) {
  //     return true;
  //   }
  //   return false;
  // }
}
