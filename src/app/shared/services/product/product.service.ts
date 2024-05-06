import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product';
import productData from '../../../../assets/JsonFiles/products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: Array<Product> = [];
  product?: Product;

  constructor() {}

  findProduct(id: string) {
    for (const productFind of productData.product) {
      if (productFind.title == id) {
        this.product = productFind;
        break;
      }
    }
    return this.product;
  }

  searchProducts(searchValue: string) {
    this.productList = [];
    productData.product.forEach((product) => {
      if (
        product.title
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .includes(
            searchValue
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase()
          )
      ) {
        this.productList?.push(product);
      }
    });
    return this.productList;
  }

  getAllProduct() {
    this.productList = productData.product;
    return this.productList;
  }

  getProductOfCategory(categoryArray: Array<string>) {
    this.productList = [];
    for (const productFind of productData.product) {
      let isAll = true;
      categoryArray.sort().forEach((category) => {
        if (!productFind.category.includes(category)) {
          isAll = false;
        }
      });
      if (isAll) {
        this.productList.push(productFind);
      }
    }
    return this.productList;
  }

  orderOf(order: string) {
    let arrayProduct: Array<Product> = [];

    if (!this.productList.length) {
      this.productList = productData.product;
    }

    switch (order) {
      case 'Maior Preço': {
        arrayProduct = [...this.productList].sort((p1, p2) => {
          return this.orderOfPlus(p1.price, p2.price);
        });
        break;
      }

      case 'Menor Preço': {
        arrayProduct = [...this.productList].sort((p1, p2) => {
          if (p1.price > p2.price) {
            return 1;
          }
          if (p1.price < p2.price) {
            return -1;
          }
          return 0;
        });
        break;
      }

      case 'Nome (A-Z)': {
        arrayProduct = [...this.productList].sort((p1, p2) => {
          return p1.title.localeCompare(p2.title);
        });
        break;
      }

      case 'Nome (Z-A)': {
        arrayProduct = [...this.productList].sort((p1, p2) => {
          return this.orderOfPlus(p1.title, p2.title);
        });
        break;
      }

      case 'Popularidade': {
        arrayProduct = [...this.productList].sort((p1, p2) => {
          return this.orderOfPlus(p1.rating, p2.rating);
        });
        break;
      }

      case 'Maiores Descontos': {
        arrayProduct = [...this.productList].sort((p1, p2) => {
          return this.orderOfPlus(
            p1.price - p1.discountPrice,
            p2.price - p2.discountPrice
          );
        });
        break;
      }

      // case "Relevância":{
      //   this.orderOfRevelancia();
      //   break;
      // }

      // case "Lançamentos":{
      //   this.orderOfLancamentos();
      //   break;
      // }
    }
    return arrayProduct;
  }

  private orderOfPlus(p1Value: number | string, p2Value: number | string) {
    if (p1Value > p2Value) {
      return -1;
    }
    if (p1Value < p2Value) {
      return 1;
    }
    return 0;
  }
}
