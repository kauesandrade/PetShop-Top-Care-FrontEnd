import { Injectable } from '@angular/core';
import productData from '../../../../assets/JsonFiles/products.json';
import { ProductService } from '../product/product.service';
import { ProductVariant } from '../../interfaces/product-variant';

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    productList: Array<ProductVariant> = [];

    constructor() { }

    getAllProductfavorited() {
        this.productList = []
        productData.product.forEach(product => {
            let productService = new ProductService()
            productService.findProduct(product)

            if (product.favorite == true) {
                this.productList.push(productService.getFirstProductVariant());
            }

        })
        
        return this.productList;
    }

}
