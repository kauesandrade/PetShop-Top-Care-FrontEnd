import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { faCheck, faPercent, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import * as Inputmask from 'inputmask';

@Component({
  selector: 'app-product-pricing',
  templateUrl: './product-pricing.component.html',
  styleUrls: ['./product-pricing.component.scss']
})
export class ProductPricingComponent implements OnInit{
  
  @Input() product?: Product

  faCheck = faCheck;
  faPercent = faPercent;
  faPlus = faPlus;
  faMinus = faMinus;

  value: number = 1;
  errorValue: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  
  plusValue(){
    if(this.value >= 100 ){
      this.value = 100
      this.errorValue = true
    }else{
      this.value++
      this.errorValue = false
    }
  }
  
  minusValue(){
    if(this.value > 1){
      this.value--
      this.errorValue = false
    }
  }

  changeInput(evt: any){
    console.log(this.value)

    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    
    if(this.value > 100){
      this.value = 100;
      this.errorValue = true
    }else if(this.value < 100 && this.value > 1){
      this.value = evt.target.value;
      this.errorValue = false
    }
    else if (this.value == null){
      this.value = 1
    }
    return true;
  }


}
