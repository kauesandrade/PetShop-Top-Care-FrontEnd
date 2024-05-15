import { Injectable } from '@angular/core';
import { ProductVariant } from '../../interfaces/product-variant';

@Injectable({
  providedIn: 'root'
})
export class OrderByService {

  constructor() { }

  orderOf(order: string, productList: Array<ProductVariant>) {
    let arrayProduct: Array<ProductVariant> = [];

    switch (order) {
      case 'Maior Preço': {
        arrayProduct = [...productList].sort((p1, p2) => {
          return this.orderOfPlus(p1.price, p2.price);
        });
        break;
      }

      case 'Menor Preço': {
        arrayProduct = [...productList].sort((p1, p2) => {
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
        arrayProduct = [...productList].sort((p1, p2) => {
          return p1.title.localeCompare(p2.title);
        });
        break;
      }

      case 'Nome (Z-A)': {
        arrayProduct = [...productList].sort((p1, p2) => {
          return this.orderOfPlus(p1.title,p2.title);
        });
        break;
      }

      case 'Popularidade': {
        arrayProduct = [...productList].sort((p1, p2) => {
          return this.orderOfPlus(p1.rating, p2.rating);
        });
        break;
      }

      case 'Maiores Descontos': {
        arrayProduct = [...productList].sort((p1, p2) => {
          return this.orderOfPlus(
           p1.discountPrice -p1.price,
           p2.discountPrice -p2.price
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
