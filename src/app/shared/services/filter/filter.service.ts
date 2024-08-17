import { Injectable } from '@angular/core';
import productData from '../../../../assets/JsonFiles/products.json';
import { Product } from '../../interfaces/product/product';
import { ProductVariant } from '../../interfaces/product/product-variant';
import { Category } from '../../interfaces/search/category';
import { Filter } from '../../interfaces/search/filter';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private productFilterList: Array<ProductVariant> = [];
  private allFilters: Array<Category> = [];

  constructor(private productService: ProductService) {}

  filterProducts(
    filters: Array<string>,
    productList: Array<ProductVariant | Product>
  ) {
    this.productFilterList = [];

    if (filters.length) {
      for (const productFind of productList) {
    

        this.productService.findProduct(productFind);

        productFind.category.forEach((categoryProduct) => {
          filters.sort().forEach((filter) => {
            if (
              categoryProduct.types.includes(filter) &&
              !this.productFilterList.includes(
                this.productService.getFirstProductVariant()
              )
            ) {
              this.productFilterList.push(
                this.productService.getFirstProductVariant()
              );
            }
          });
        });
      }
    } else {
      productList.forEach((product) => {
        this.productService.findProduct(product);

        this.productFilterList.push(this.productService.getFirstProductVariant());
      });
    }

    return this.productFilterList;
  }

  getAllProductsOfCategory(categoryArray: Array<string>) {
    this.productFilterList = [];

    for (const productFind of productData.product) {
      let isAll = 0;
      
      this.productService.findProduct(productFind);

      productFind.category.forEach((categoryProduct) => {
        categoryArray.sort().forEach((category) => {
          if (categoryProduct.types.includes(category)) {
            isAll++;
          }
        });
      });
      if (
        isAll == categoryArray.length &&
        !this.productFilterList.includes(
          this.productService.getFirstProductVariant()
        )
      ) {
        this.productFilterList.push(this.productService.getFirstProductVariant());
      }
    }
    return this.productFilterList;
  }

  getSimilarProducts(product: Product | ProductVariant) {
    this.productFilterList = [];

    for (const productFind of productData.product) {

      let add = 0;

      this.productService.findProduct(productFind);

      this.productService
        .getFirstProductVariant()
        .category.sort()
        .forEach((category: Category) => {
          if (
            this.productService
              .getFirstProductVariant()
              .category.includes(category) &&
            this.productService.getFirstProductVariant().code != product.code
          ) {
            add++;
          }
        });

      if (add >= 3) {
        this.productFilterList.push(this.productService.getFirstProductVariant());
      }
    }

    return this.productFilterList;
  }

  getAllFiltersProduct(productList: Array<ProductVariant>) {
    this.allFilters = [];

    productList.forEach((product) => {
      product.category.forEach((category) => {
        let notFound = true;
        this.allFilters.forEach((filter) => {
          if (filter.title == category.title) {
            notFound = false;
          }
        });
        if (notFound) {
          this.allFilters.push({
            title: category.title,
            types: [],
          });
        }
      });
    });

    productList.forEach((product) => {
      product.category.forEach((categoty) => {
        this.allFilters.forEach((filters) => {
          if (filters.title == categoty.title) {
            categoty.types.forEach((type) => {
              if (!filters.types.includes(type)) {
                filters.types.push(type);
              }
            });
          }
        });
      });
    });

    return this.allFilters;
  }

  getListFilterWithChecked(productList: Array<ProductVariant>) {
    this.getAllFiltersProduct(productList);

    const filterWithCheck: Array<Filter> = [];

    this.allFilters.forEach((filter) => {
      const filterTypes: Array<any> = [];
      filter.types.forEach((type) => {
        filterTypes.push({
          type: type,
          isChecked: false,
        });
      });

      filterWithCheck.push({
        title: filter.title,
        types: [...filterTypes],
      });
    });
    return filterWithCheck;
  }
}
