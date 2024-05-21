import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { CartPaymentInformations } from '../../interfaces/order/cart-payment-informations';
import { Item } from '../../interfaces/order/item';
import { ProductVariant } from '../../interfaces/product/product-variant';
import { Address } from '../../interfaces/user/address';

@Injectable({
  providedIn: 'any',
})

export class CartService {
    itensCart: Array<Item> = []
    itensSubject = new BehaviorSubject<Array<Item>>([]);
    
    cartInformations: CartPaymentInformations = {};
    cartInformationsSubject = new BehaviorSubject<CartPaymentInformations>({});

    address?: Address

    constructor() {
        this.itensCart = this.getItensLocalStorage();
    }

    getItens(): Observable<Item[]>{
        this.itensSubject.next(this.itensCart);
        return this.itensSubject.asObservable();
    }

    removeItemCart(itemToRemove: Item){
        this.itensCart.splice(this.itensCart.indexOf(itemToRemove), 1);
        this.addLocalStorege();
    }

    getCartInformations(): Observable<CartPaymentInformations>{
        this.calcProductPrices();
        this.calcTotal();
        this.calcParcels();
        this.cartInformationsSubject.next(this.cartInformations);
        return this.cartInformationsSubject.asObservable();
    }
    
    updateItem(item: Item){
        this.itensCart = [];
        this.itensCart = this.getItensLocalStorage();
        
        this.itensCart.forEach( itm =>{
            if(itm.product.variantCode == item.product.variantCode && itm.product.code == item.product.code){
                itm.amount = item.amount
            }
        })
        
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

    setShippingPrice(shippingPrice: number){
        this.cartInformations.shippingPrice = shippingPrice;
        this.getCartInformations();
    }

    setAddress(address: Address){
        this.address = address;
    }

    getAddress(){
        return this.address;
    }
    
    
    private calcTotal() {
        let total = 0
        total += this.cartInformations.partialPrice!;
        total += this.cartInformations.shippingPrice || 0;
        total -= this.cartInformations.discountPrice || 0;
        
        this.cartInformations.totalPrice = total;
    }

    private calcParcels() {
        if(this.cartInformations.totalPrice! > 100){
            this.cartInformations.parcelsNumber = 2
            this.cartInformations.parcelsPrice = this.cartInformations.totalPrice! / 2
        }else{
            this.cartInformations.parcelsNumber = 1
            this.cartInformations.parcelsPrice = this.cartInformations.totalPrice!
        }
        if (this.cartInformations.totalPrice! > 200){
            this.cartInformations.parcelsNumber = 3
            this.cartInformations.parcelsPrice = this.cartInformations.totalPrice! / 3
        }
        if (this.cartInformations.totalPrice! > 400){
            this.cartInformations.parcelsNumber = 5
            this.cartInformations.parcelsPrice = this.cartInformations.totalPrice! / 5
        }
    }
    
    private calcProductPrices(){
        let sumPrices = 0
        this.itensCart.forEach(item =>{
            sumPrices += item.product.price * item.amount;
        })

        if(sumPrices > 300){
            this.cartInformations.discountPrice = sumPrices * 0.1
        }else{
            this.cartInformations.discountPrice = 0
        }
        
        this.cartInformations.amountItens = this.itensCart.length;
        this.cartInformations.partialPrice = sumPrices;
    }

    private getItensLocalStorage(){
        this.getItens();
        this.getCartInformations();
        return JSON.parse(localStorage.getItem('itensCart') || '""') == "" ? [] : JSON.parse(localStorage.getItem('itensCart') || '""')
    }

    private addLocalStorege(){
        this.getItens();
        this.getCartInformations();
        localStorage.setItem('itensCart', JSON.stringify( this.itensCart));
    }
}
