import { Injectable } from '@angular/core';
import productData from '../../../../assets/JsonFiles/products.json';
import productVariantData from '../../../../assets/JsonFiles/productVariant.json';
import { Product, ProductResponseCard, ProductResponsePage } from '../../interfaces/product/product';
import { ProductVariant } from '../../interfaces/product/product-variant';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  private apiUrl = "http://localhost:8088/topcare/product";
  
  constructor(private httpClient: HttpClient) {}
  
  getProductByCode(code: number): Observable<ProductResponsePage> {
    return this.httpClient.get<ProductResponsePage>(`${this.apiUrl}/${code}`);
  }

  getSimilarProductsByCode(code: number): Observable<ProductResponseCard>{
    return this.httpClient.get<ProductResponseCard>(`${this.apiUrl}/similar/${code}`);
  }

  getProductsByCategories(categories: Array<number>): Observable<ProductResponseCard>{
    return this.httpClient.put<ProductResponseCard>(`${this.apiUrl}/categories`, categories);
  }
  
  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }
  
  editProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.apiUrl}/${id}`, product);
  }
  
  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.apiUrl}/${id}`);
  }
  
  
  
  
  
  
  private product?: Product;
  private productVariant!: ProductVariant;
  private productVariantsList!: Array<ProductVariant>;

  getProduct() {
    return this.product;
  }

  getProductData(){
    return productData.product;
  }

  getProductVariants() {
    return this.productVariantsList;
  }

  getProductVariant() {
    return this.productVariant;
  }

  changeVariableProduct(productVariant: ProductVariant) {
    this.productVariant = productVariant;
  }
  getFirstProductVariant() {
    return this.getProductVariants()[0];
  }

  findProduct(id: number | string | Product | ProductVariant) {
    if (typeof id == 'number' || typeof id == 'string') {
      for (const productFind of productData.product) {
        if (productFind.title == id || productFind.code == id) {
          this.product = productFind;
          break;
        }
      }
    } else {
      this.product = id;
    }

    if (this.product) {
      this.getAllProductVariants();
      this.changeVariableProduct(this.getFirstProductVariant());
    }
  }

  private getAllProductVariants() {
    this.productVariantsList = [];
    for (const variant of productVariantData.variant as ProductVariant[]) {
      if (
        this.product?.code == variant.code &&
        this.verifyProductIsAvailable(variant)
      ) {
        this.productVariantsList.push(variant);
      }
    }

    this.productVariantsList = this.productVariantsList.sort((p1, p2) => {
      return p1.variant.localeCompare(p2.variant);
    });

    return this.productVariantsList;
  }

  private verifyProductIsAvailable(product: ProductVariant) {
    if (product.available) {
      return true;
    }
    return false;
  }
}
