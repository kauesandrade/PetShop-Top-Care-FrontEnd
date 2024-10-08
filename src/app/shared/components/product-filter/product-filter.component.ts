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
import { Filter } from '../../interfaces/search/filter';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnChanges {
  faFilter = faFilter;
  faTimes = faTimes;
  faTrash = faTrash;

  @Input() productFiltersWihtChecked: Array<Filter> = [];
  @Output() emitFilters = new EventEmitter<Array<string>>();

  openFilter: boolean = false;
  applyFilters: Array<string> = [];

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.applyFilters = [];
  }

  takeOffFilter(variableFilter: any) {
    this.productFiltersWihtChecked.forEach((filter) => {
      filter.types.forEach((type) => {
        if (type.type == variableFilter) {
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
    this.productFiltersWihtChecked.forEach((filter) => {
      filter.types.forEach((type) => {
        type.isChecked = false;
      });
    });
    this.applyFilter();
  }

  applyFilter() {
    this.applyFilters = [];
    this.productFiltersWihtChecked.forEach((filter) => {
      filter.types.forEach((type) => {
        if (type.isChecked) {
          this.applyFilters.push(type.type);
        }
      });
    });
    this.openFilter = false;
    this.elementRef.nativeElement.ownerDocument.body.style.overflowY = 'scroll';
    this.emitFilters.emit(this.applyFilters);
  }
}
