import { Injectable } from '@angular/core';
import productData from '../../../../assets/JsonFiles/products.json';
import { Product } from '../../interfaces/product/product';
import { ProductVariant } from '../../interfaces/product/product-variant';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  productList: Array<ProductVariant> = [];

  constructor(private productService: ProductService) {}

  getAllProductfavorited() {
    this.productList = [];
    productData.product.forEach((product) => {
      this.productService.findProduct(product);

      if (product.favorite == true) {
        this.productList.push(this.productService.getFirstProductVariant());
      }
    });

    return this.productList;
  }

  searchProducts(searchValue: string, productList: Array<ProductVariant>) {
    const searchValueList: Array<string> = searchValue.split(' ');
    this.productList = productList;

    searchValueList.forEach((searchValueFind) => {
      this.searchInProductList(searchValueFind);
    });

    return this.productList;
  }

  private searchInProductList(searchValueFind: string) {
    const productListFilter: Array<ProductVariant> = [];

    this.productList.forEach((product) => {
      if (
        this.getTitleWithTypes(product).includes(
          this.formatString(searchValueFind)
        ) &&
        this.productList.includes(product) &&
        this.verifyProductIsAvailable(product)
      ) {
        productListFilter.push(product);
      }
    });
    this.productList = productListFilter;
  }

  private verifyProductIsAvailable(product: ProductVariant) {
    if (product.available) {
      return true;
    }
    return false;
  }

  private getTitleWithTypes(product: Product) {
    let productTitle = product.title + ' ' + product.brand;

    this.productService.findProduct(product);
    this.productService.getProductVariants().forEach((variant) => {
      productTitle += ' ' + variant.variant;
    });
    return this.formatString(productTitle);
  }

  private formatString(value: string) {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }
}
