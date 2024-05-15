import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductVariant } from '../../interfaces/product-variant';
import productData from '../../../../assets/JsonFiles/products.json';
import productVariantData from '../../../../assets/JsonFiles/productVariant.json';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private product?: Product;
  private productVariant!: ProductVariant;
  private productVariantsList!: Array<ProductVariant>;


  constructor() { 
  }

  getProduct() {
    return this.product;
  }
  
  getProductVariants() {
    return this.productVariantsList;
  }
  
  getProductVariant() {
    return this.productVariant;
  }
  
  changeVariableProduct(productVariant: ProductVariant){
    this.productVariant = productVariant;
  }
  getFirstProductVariant() {
    return this.getProductVariants()[0];
  }

  
  findProduct(id: number | string | Product | ProductVariant) {
    if(typeof id == "number" || typeof id == "string") {
      for (const productFind of productData.product) {
        if (productFind.title == id || productFind.code == id) {
          this.product = productFind;
          break;
        }
      }

    }else{
      this.product = id
    }

    if (this.product) {
      this.getAllProductVariants();
      this.changeVariableProduct(this.getFirstProductVariant());
    }
  }

  private getAllProductVariants() {
    this.productVariantsList = []
    for (const variant of productVariantData.variant) {
      if (this.product?.code == variant.code && this.verifyProductIsAvailable(variant)) {
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
