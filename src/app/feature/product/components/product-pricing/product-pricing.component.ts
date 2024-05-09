import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { faCheck, faPercent, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
// import * as Inputmask from 'inputmask';

@Component({
  selector: 'app-product-pricing',
  templateUrl: './product-pricing.component.html',
  styleUrls: ['./product-pricing.component.scss']
})
export class ProductPricingComponent implements OnInit {
  
  @Input() product?: Product

  // private regexMap = {integer: '^[0-9]*$',};

  faCheck = faCheck;
  faPercent = faPercent;
  faPlus = faPlus;
  faMinus = faMinus;

  value: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  plusValue(){
    this.value++
  }

  minusValue(){
    if(this.value > 1){
      this.value--
    }
  }
}
