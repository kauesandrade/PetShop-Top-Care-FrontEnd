import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Item } from '../../interfaces/order/item';
import { ProductVariant } from '../../interfaces/product/product-variant';

@Injectable({
  providedIn: 'any',
})

export class CartService {
    itensCart: Array<Item> = []

    constructor() {
        this.itensCart = this.getItensLocalStorage();
    }

    removeItemCart(itemToRemove: Item){
        this.itensCart.splice(this.itensCart.indexOf(itemToRemove), 1);
        this.addLocalStorege();
    }
    
    updateItensList(itenList: Array<Item>){
        this.itensCart = itenList
        this.addLocalStorege();
    }
    
    getItens(): Array<Item>{
        return this.itensCart
    }

    updateItem(item: Item){
        this.itensCart = [];
        this.itensCart = this.getItensLocalStorage();

        let array: Array<Item> = []
        this.itensCart.forEach( itm =>{
            if(itm.product.variantCode == item.product.variantCode){
                array.push(item)
            }else{

                array.push(itm)
            }
        })
        this.itensCart = []
        this.itensCart = array
        
        this.addLocalStorege();
    }

    addItemCart(product: ProductVariant, amount: number) {
        const newItem: Item = {
            product,
            amount
        }

        this.itensCart = [];
        this.itensCart = this.getItensLocalStorage();
        let found: boolean = false;

        this.itensCart.forEach((product) => {
            if (product.product.variantCode == newItem.product.variantCode && product.product.code == newItem.product.code) {
                product.amount = (product.amount + newItem.amount) > 100 ? product.amount = 100 : product.amount + newItem.amount;
                found = true;
            }
        })

        if (!found) {
            this.itensCart.push(newItem);
        }
        
        this.addLocalStorege()
    }

    

    sumProductPrices(itens: Array<Item>){
        let sumPrices = 0
        itens.forEach(item =>{
            sumPrices += item.product.price * item.amount;
        })
        return sumPrices;
    }

    private getItensLocalStorage(){
        return JSON.parse(localStorage.getItem('itensCart') || '""') == "" ? [] : JSON.parse(localStorage.getItem('itensCart') || '""')
    }

    private addLocalStorege(){
        localStorage.setItem('itensCart', JSON.stringify( this.itensCart));
    }
}
