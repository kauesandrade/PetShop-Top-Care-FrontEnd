import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product';
import * as productData from '../../../../assets/JsonFiles/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  productList: Array<Product> | null = [];
  product?: Product;
  
  constructor() { }


  findProduct(id: string){
    for(const productFind of productData.product){
      if(productFind.title == id){
        this.product = productFind;
        break;
      }
    }
    return this.product;
  }

  //FAZERRRRRRRRRRRRRRRRRR
  // searchProducts(searchValue: string){
  //   this.productList?.filter(item => item.(searchValue));
  //   return this.productList;
  // }

  getAllProduct(){
    this.productList = productData.product;
    return this.productList;
  }

  //MELHORAS ESSA FUNÇÃO
  getProductOfCategory(category: Array<string> | string){
    for(const productFind of productData.product){
      for(const categoryProduct of productFind.category){

        if(typeof category == 'string'){
          if(categoryProduct == category){
            this.productList?.push(productFind);
          }
        }

        else{
          category.forEach((category)=>{
            if(categoryProduct == category){
              this.productList?.push(productFind);
            }
          })
        }

      }
    }
    return this.productList;
  }

  orderOf(order: string){
    switch(order){
      // case "Relevância":
      //   this.orderOfRevelancia();

      case "Maior Preço":
        this.orderOfMaiorPreco();

      case "Menor Preço":
        this.orderOfMenorPreco();
      
      case "Nome (A-Z)":
        this.orderOfNomeAZ();
      
      case "Nome (Z-A)":
        this.orderOfNomeZA();

      case "Popularidade":
        this.orderOfPopularidade();
      
      case "Maiores Descontos":
        this.orderOfMaioresDescontos();
      
      // case "Lançamentos":
      //   this.orderOfLancamentos();
    }
  }

  // private orderOfRevelancia(){
    
  // }

  private orderOfMaiorPreco(){
    this.productList?.sort((p1, p2) =>{
      return p1.price - p2.price;
    })
  }
  
  private orderOfMenorPreco() {
    this.productList?.sort((p1, p2) =>{
      return p1.price + p2.price;
    })
  }

  private orderOfNomeAZ() {
    this.productList?.sort((p1, p2)=>{
      return p1.title.localeCompare(p2.title);
    });
  }

  private orderOfNomeZA() {
    this.productList?.sort((p1, p2)=>{
      if(p1.title > p2.title){
        return -1;
      }
      if(p1.title < p2.title){
        return 1;
      }

      return 0;
    });
  }

  private orderOfPopularidade() {
    this.productList?.sort((p1, p2)=>{
      return p1.rating - p2.rating;
    });
  }

  private orderOfMaioresDescontos() {
    this.productList?.sort((p1, p2)=>{
      return p1.discountPrice - p2.discountPrice;
    });
  }

  // private orderOfLancamentos() {
    
  // }


}
