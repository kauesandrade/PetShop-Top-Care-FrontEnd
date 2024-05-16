import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faFilter, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CategoryProduct } from '../interfaces/category-product';
import { FilterProduct } from '../interfaces/filter-product';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  
  faFilter = faFilter;
  faTimes = faTimes;
  faTrash = faTrash;

  @Input() productFiltersWihtChecked: Array<any> = []
  @Output() emitFilters = new EventEmitter<Array<string>>;

  openFilter: boolean = false;
  applyFilters: Array<string> = []
  
  constructor(private elementRef: ElementRef ) {
  }
  
  ngOnInit(): void {
  }
  
  takeOffFilter(variableFilter: any) {
    console.log(variableFilter)
    variableFilter.isChecked = false;
    this.applyFilter();
  }

  openFilters() {
    if(this.openFilter){
      this.openFilter = false;
      this.elementRef.nativeElement.ownerDocument.body.style.overflowY = 'scroll';
    }
    else{
      this.openFilter = true;
      this.elementRef.nativeElement.ownerDocument.body.style.overflowY = 'hidden';
    }
  }

  changeChecked(typeFilter: any){
    typeFilter.isChecked ? typeFilter.isChecked = false : typeFilter.isChecked = true;
  }

  clearAllFilters(){
    // this.typeFilters.forEach(variablesFilter =>{
    //   variablesFilter.variables.forEach(variable => {
    //     variable.isChecked = false;
    //   });
    // })
    // this.applyFilter();
  }

  applyFilter(){
    this.applyFilters = []
    this.productFiltersWihtChecked.forEach(variablesFilter =>{
      variablesFilter.types.forEach((type: {type: string, isChecked: any; }) => {
        if(type.isChecked){
          this.applyFilters.push(type.type);
        }
      });
    })
    this.openFilter = false;
    this.elementRef.nativeElement.ownerDocument.body.style.overflowY = 'scroll';
    this.emitFilters.emit(this.applyFilters);
  }

}
