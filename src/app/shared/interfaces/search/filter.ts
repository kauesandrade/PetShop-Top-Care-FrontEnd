import { ProductCategoryResponse } from "../product/response/product-category-response";

export interface Filter {
  title: string;
  types: Array<{
    type: string;
    isChecked: boolean;
  }>;
}

export interface CategoryGroupFiltersResponse {
  title: string;
  categories: Array<ProductCategoryResponse>
}