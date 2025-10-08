import { Injectable } from '@angular/core';
import { Order } from '../../interfaces/order/order';
import { ProductVariant } from '../../interfaces/product/product-variant';

@Injectable({
  providedIn: 'root',
})
export class OrderByService {
  constructor() {}

  orderOf(order: string, productList: Array<ProductVariant>) {
    let arrayProduct: Array<ProductVariant> = [];

    switch (order) {
      case 'Maior Preço': {
        arrayProduct = [...productList].sort((p1, p2) => {
          return this.orderByPrice(p1.price, p2.price);
        });
        break;
      }

      case 'Menor Preço': {
        arrayProduct = [...productList].sort((p1, p2) => {
          return this.orderByPrice(p1.price, p2.price);
        });
        arrayProduct.reverse();
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
          return this.orderByPrice(p1.title, p2.title);
        });
        break;
      }

      case 'Popularidade': {
        arrayProduct = [...productList].sort((p1, p2) => {
          return this.orderByPrice(p1.rating, p2.rating);
        });
        break;
      }

      case 'Maiores Descontos': {
        arrayProduct = [...productList].sort((p1, p2) => {
          return this.orderByPrice(
            p1.discountPrice - p1.price,
            p2.discountPrice - p2.price
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

  orderOrdersBy(order: string, orderList: Array<Order>) {
    let arrayOrder: Array<Order> = [];

    switch (order) {
      case 'Mais Recente': {
        arrayOrder = [...orderList].sort((o1, o2) => {
          return this.orderByDate(o1.orderDate, o2.orderDate);
        });
        break;
      }
      case 'Mais Antigo': {
        arrayOrder = [...orderList].sort((o1, o2) => {
          return this.orderByDateDesc(o1.orderDate, o2.orderDate);
        });
        break;
      }
      case 'Entregue': {
        arrayOrder = [...orderList].sort((o1, o2) => {
          return this.orderByDate(o1.expectedDate, o2.expectedDate);
        });
        break;
      }
      case 'Não Entregue': {
        arrayOrder = [...orderList].sort((o1, o2) => {
          return this.orderByDateDesc(o1.expectedDate, o2.expectedDate);
        });
        break;
      }
    }

    return arrayOrder;
  }

  private orderByPrice(p1Value: number | string, p2Value: number | string) {
    if (p1Value > p2Value) {
      return -1;
    }
    if (p1Value < p2Value) {
      return 1;
    }
    return 0;
  }

  private formatToDate(date: string) {
    return `${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4)}`;
  }

  private orderByDate(value1: string, value2: string) {
    let date1 = Date.parse('01/01/0001');
    let date2 = Date.parse('01/01/0001');

    if (value1) {
      date1 = Date.parse(this.formatToDate(value1));
    }
    if (value2) {
      date2 = Date.parse(this.formatToDate(value2));
    }

    if (date1 < date2) {
      return -1;
    }
    if (date1 > date2) {
      return 1;
    }
    return 0;
  }

  private orderByDateDesc(value1: string, value2: string) {
    let date1 = Date.parse('01/01/0001');
    let date2 = Date.parse('01/01/0001');

    if (value1) {
      date1 = Date.parse(this.formatToDate(value1));
    }
    if (value2) {
      date2 = Date.parse(this.formatToDate(value2));
    }

    if (date1 < date2) {
      return 1;
    }
    if (date1 > date2) {
      return -1;
    }
    return 0;
  }
}
