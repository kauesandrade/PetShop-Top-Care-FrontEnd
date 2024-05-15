import { Injectable } from '@angular/core';
import { ProductVariant } from '../../interfaces/product-variant';
import productData from '../../../../assets/JsonFiles/products.json';
import { ProductService } from '../product/product.service';
import { Product } from '../../interfaces/product';
import { CategoryProduct } from '../../interfaces/category-product';

@Injectable({
    providedIn: 'root'
})
export class FilterService {

    private allFilters: Array<CategoryProduct> = []
    private applyFiltersList: Array<string> = [];

    constructor() { }

    applyFilters(filter: Array<string>){
        this.applyFiltersList = filter;
    }
    
    removeAllFilters(){
        this.applyFiltersList = []
    }


    filterProducts(filters: Array<CategoryProduct>, productList: Array<ProductVariant>) {
        return this.filter(filters, productList);
    }

    getAllFiltersProduct(productList: Array<ProductVariant>){

        productList.forEach(product =>{
            product.category.forEach( category =>{
                this.allFilters.forEach( filters =>{
                    if(filters.title == category.title){
                        filters.types.forEach( typefilter =>{
                            category.types.forEach( typeCategory =>{
                                if(typefilter != typeCategory){
                                    filters.types.push(typeCategory);
                                }
                            })
                        })

                    }else{
                        this.allFilters.push(category)
                        filters.types.forEach( typefilter =>{
                            category.types.forEach( typeCategory =>{
                                if(typefilter != typeCategory){
                                    filters.types.push(typeCategory);
                                }
                            })
                        })
                    }
                })
            })
        })

        return this.allFilters;
    }



    getAllProductsOfCategory(categoryArray: Array<CategoryProduct>) {
        return this.filter(categoryArray, productData.product)
    }

    getSimilarProducts(product: Product | ProductVariant) {
        const productList: Array<ProductVariant> = [];

        for (const productFind of productData.product) {
            let productService = new ProductService()
            let add = 0;

            productService.findProduct(product);

            product.category.sort().forEach((category) => {
                if (productFind.category.includes(category) && productFind.code != product.code) {
                    add++;
                }
            });

            if (add >= 3) {
                productList.push(productService.getFirstProductVariant());
            }
        }

        return productList;
    }


    private filter(categoryArray: Array<CategoryProduct>, productData: Array<ProductVariant | Product>) {
        const productFilterList: Array<ProductVariant> = []
        for (const productFind of productData) {
            let productService = new ProductService()
            let isAll = true;

            productService.findProduct(productFind);

            categoryArray.sort().forEach((category) => {

                if (!productFind.category.includes(category)) {
                    isAll = false;
                }

            });

            if (isAll) {
                productFilterList.push(productService.getFirstProductVariant());
            }
        }
        return productFilterList;
    }
}
