import { Injectable } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ProductVariant } from '../../interfaces/product-variant';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    itensCart: Array<Item> = []

    constructor() {
        this.itensCart = this.getItensLocalStorage();
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

    removeItemCart(itemToRemove: Item){
        this.itensCart.splice(this.itensCart.indexOf(itemToRemove), 1);
        this.addLocalStorege();
    }
    
    updateItensList(itenList: Array<Item>){
        this.itensCart = itenList
        this.addLocalStorege();
    }

    private getItensLocalStorage(){
        return JSON.parse(localStorage.getItem('itensCart') || '""') == "" ? [] : JSON.parse(localStorage.getItem('itensCart') || '""')
    }

    private addLocalStorege(){
        localStorage.setItem('itensCart', JSON.stringify( this.itensCart));
    }
}
