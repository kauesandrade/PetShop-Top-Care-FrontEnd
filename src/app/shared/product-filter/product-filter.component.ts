import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faFilter, faMars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  
  faFilter = faFilter;
  faXmark = faMars;
  
  @Input() filters = [
    "Coleira",
    "Verde",
    "Porte"
  ]
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  takeOffFilter(_t7: string) {
    console.log(_t7);
  }
  openFilters() {
    console.log("openFilter ")
  }
}
