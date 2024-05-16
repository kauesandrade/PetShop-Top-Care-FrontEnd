import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductVariant } from '../../interfaces/product-variant';
import productData from '../../../../assets/JsonFiles/products.json';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private productList: Array<ProductVariant> = []

  constructor() {}

  searchProducts(searchValue: string) {

    const searchValueList: Array<string> = searchValue.split(" ");
    
    let first = true;
    searchValueList.forEach((searchValueFind) => {
      if (first) {
        this.searchInProductData(searchValueFind);
        first = false;
      }else if(!first && this.productList.length > 0){
        this.searchInProductList(searchValueFind);
      }
    });
    return this.productList;
  }
  
  getProductList(){
    return this.productList;
  }
  
  private searchInProductData(searchValueFind: string) {
    let productService = new ProductService()
    this.productList = []
    
    productData.product.forEach(product => {
      productService.findProduct(product);
      
      if (this.getTittleWithTypes(product).includes(this.formatString(searchValueFind)) 
      && !this.productList.includes(productService.getFirstProductVariant())
      && this.verifyProductIsAvailable(productService.getFirstProductVariant())) {
        
        this.productList.push(productService.getFirstProductVariant());
        
      }
    })
  }

  private searchInProductList(searchValueFind: string){
    const productListFilter: Array<ProductVariant> = []

    this.productList.forEach(product => {
      if (this.getTittleWithTypes(product).includes(this.formatString(searchValueFind)) 
      && this.productList.includes(product)
      && this.verifyProductIsAvailable(product)) {
        productListFilter.push(product);
      }
    })
    this.productList = productListFilter;
  }

  private verifyProductIsAvailable(product: ProductVariant) {
    if (product.available) {
      return true;
    }
    return false;
  }

  private getTittleWithTypes(product: Product){
    let productService = new ProductService()
    let productTitle = product.title + " " + product.brand

    productService.findProduct(product);
    productService.getProductVariants().forEach(variant => {
      productTitle += " " + variant.variant;
    })
    return this.formatString(productTitle);
  }


  private formatString(value: string) {
    return value.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }


}

