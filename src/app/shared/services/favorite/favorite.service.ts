import { Injectable } from '@angular/core';
import productData from '../../../../assets/JsonFiles/products.json';
import { ProductService } from '../product/product.service';
import { ProductVariant } from '../../interfaces/product-variant';
import { Product } from '../../interfaces/product';

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

    searchProducts(searchValue: string, productList: Array<ProductVariant>) {

        const searchValueList: Array<string> = searchValue.split(" ");
        this.productList = productList;

        searchValueList.forEach((searchValueFind) => {
            this.searchInProductList(searchValueFind);
        });
        
        return this.productList;
    }

    private searchInProductList(searchValueFind: string) {
        const productListFilter: Array<ProductVariant> = []

        this.productList.forEach(product => {
            if (this.getTittleWithTypes(product).includes(this.formatString(searchValueFind))
                && this.productList.includes(product)
                && this.verifyProductIsAvailable(product)) {
                productListFilter.push(product);
            }
        })
        this.productList = productListFilter;
    }

    private verifyProductIsAvailable(product: ProductVariant) {
        if (product.available) {
            return true;
        }
        return false;
    }

    private getTittleWithTypes(product: Product) {
        let productService = new ProductService()
        let productTitle = product.title + " " + product.brand

        productService.findProduct(product);
        productService.getProductVariants().forEach(variant => {
            productTitle += " " + variant.variant;
        })
        return this.formatString(productTitle);
    }


    private formatString(value: string) {
        return value.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }

}
