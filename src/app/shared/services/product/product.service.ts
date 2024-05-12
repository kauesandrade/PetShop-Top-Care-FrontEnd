import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductVariant } from '../../interfaces/product-variant';
import productData from '../../../../assets/JsonFiles/products.json';
import productVariantData from '../../../../assets/JsonFiles/productVariant.json'
import { Item } from './../../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: Array<ProductVariant> = [];
  productVariantsList: Array<ProductVariant> = [];

  product?: Product;

  constructor() { }

  findProduct(code: number) {
    for (const productFind of productData.product) {
      if (productFind.code == code) {
        this.product = productFind;
        break;
      }
    }
    return this.product;
  }

  findProductByUrl(url: string) {
    for (const productFind of productData.product) {
      if (productFind.title == url) {
        this.product = productFind;
        break;
      }
    }
    return this.product;
  }

  addItemCart(product: ProductVariant, amount: number) {
    const newItem: Item = {
      product,
      amount
    }

    const itensList: Array<Item> = JSON.parse(localStorage.getItem('itensCart') || '""') == "" ? [] : JSON.parse(localStorage.getItem('itensCart') || '""');
    let found: boolean = false;

    itensList.forEach((product) => {
      if (product.product.variantCode == newItem.product.variantCode && product.product.code == newItem.product.code) {
        product.amount = (product.amount + newItem.amount) > 100 ? product.amount = 100 : product.amount + newItem.amount;
        found = true;
      }
    })
    if (!found) {
      itensList.push(newItem);
    }
    localStorage.setItem('itensCart', JSON.stringify(itensList));
  }

  searchProducts(searchValue: string) {
    this.productList = [];

    const searchValueList: Array<string> = searchValue.split(" ");
    productData.product.forEach((product) => {
      // const productTitle = product.title + 

      searchValueList.forEach((searchValueFind) => {
        if (product.title
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .includes(
            searchValueFind
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase()) && !this.productList.includes(this.getFirstProductVariant(product))) {
          this.productList.push(this.getFirstProductVariant(product));
        }
      })


    });
    return this.productList;
  }


  getAllProductVariants(product: Product) {
    this.productVariantsList = []
    const arrayProductVariants: ProductVariant[] = []

    for (const variant of productVariantData.variant) {
      if (product.code == variant.code) {
        arrayProductVariants.push(variant);
      }
    }

    this.productVariantsList = arrayProductVariants.sort((p1, p2) => {
      return p1.variant.localeCompare(p2.variant);
    });

    return this.productVariantsList;
  }



  getFirstProductVariant(product: Product) {
    return this.getAllProductVariants(product)[0];
  }


  filterProductOfCategory(categoryArray: Array<string>) {

    const productFilterList: Array<ProductVariant> = []

    for (const productFind of this.productList) {
      let isAll = true;
      categoryArray.sort().forEach((category) => {
        if (!productFind.category.includes(category)) {
          isAll = false;
        }
      });
      if (isAll) {
        productFilterList.push(this.getFirstProductVariant(productFind));
      }
    }
    return productFilterList;
  }

  getProductsOfCategory(categoryArray: Array<string>) {
    this.productList = [];
    for (const productFind of productData.product) {
      let isAll = true;
      categoryArray.sort().forEach((category) => {
        if (!productFind.category.includes(category)) {
          isAll = false;
        }
      });
      if (isAll) {
        this.productList.push(this.getFirstProductVariant(productFind));
      }
    }
    return this.productList;
  }

  getProductOfCategoryWithoutOfProduct(product: Product | ProductVariant) {
    this.productList = [];
    for (const productFind of productData.product) {
      let add = 0;

      product.category.sort().forEach((category) => {
        if (productFind.category.includes(category) && productFind.code != product.code) {
          add++;
        }
      });
      if (add >= 3) {
        this.productList.push(this.getFirstProductVariant(productFind));
      }
    }
    return this.productList;
  }






  orderOf(order: string) {
    let arrayProduct: Array<ProductVariant> = [];

    switch (order) {
      case 'Maior Preço': {
        arrayProduct = [...this.productList].sort((p1, p2) => {
          return this.orderOfPlus(this.getAllProductVariants(p1)[0].price, this.getAllProductVariants(p2)[0].price);
        });
        break;
      }

      case 'Menor Preço': {
        arrayProduct = [...this.productList].sort((p1, p2) => {
          if (this.getFirstProductVariant(p1).price > this.getFirstProductVariant(p2).price) {
            return 1;
          }
          if (this.getFirstProductVariant(p1).price < this.getFirstProductVariant(p2).price) {
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
          return this.orderOfPlus(this.getFirstProductVariant(p1).title, this.getFirstProductVariant(p2).title);
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
            this.getFirstProductVariant(p1).discountPrice - this.getFirstProductVariant(p1).price,
            this.getFirstProductVariant(p2).discountPrice - this.getFirstProductVariant(p2).price
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
