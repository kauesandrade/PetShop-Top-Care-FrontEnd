import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faFilter, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CategoryGroupFiltersResponse, Filter } from '../../interfaces/search/filter';
import { ProductCategoryResponse } from '../../interfaces/product/response/product-category-response';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnChanges {
  faFilter = faFilter;
  faTimes = faTimes;
  faTrash = faTrash;

  @Input() productFilters: Array<CategoryGroupFiltersResponse> = [];
  @Output() emitFilters = new EventEmitter<Array<number>>();

  openFilter: boolean = false;
  applyFilters: Array<ProductCategoryResponse> = [];

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.applyFilters = [];
  }

  takeOffFilter(variableFilter: any) {
    this.productFilters.forEach((filter) => {
      filter.categories.forEach((type) => {
        if (type.id == variableFilter) {
          type.isChecked = false;
        }
      });
    });
    this.applyFilter();
  }

  openFilters() {
    if (this.openFilter) {
      this.openFilter = false;
      this.elementRef.nativeElement.ownerDocument.body.style.overflowY =
        'scroll';
    } else {
      this.openFilter = true;
      this.elementRef.nativeElement.ownerDocument.body.style.overflowY =
        'hidden';
    }
  }

  changeChecked(typeFilter: any) {
    typeFilter.isChecked
      ? (typeFilter.isChecked = false)
      : (typeFilter.isChecked = true);
  }

  clearAllFilters() {
    this.productFilters.forEach((filter) => {
      filter.categories.forEach((type) => {
        type.isChecked = false;
      });
    });
    this.applyFilter();
  }

  applyFilter() {
    this.applyFilters = [];
    this.productFilters.forEach((filter) => {
      filter.categories.forEach((type) => {
        if (type.isChecked) {
          this.applyFilters.push(type);
        }
      });
    });
    this.openFilter = false;
    this.elementRef.nativeElement.ownerDocument.body.style.overflowY = 'scroll';
    this.emitFilters.emit(this.getIdsFilterCategories());
  }

  getIdsFilterCategories() {
    let idsFilterCategories: number[] = [];
    this.applyFilters.forEach((filter) => {
      idsFilterCategories.push(filter.id);
    });
    return idsFilterCategories;
  }

}
