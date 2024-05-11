import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faCheck, faPercent } from '@fortawesome/free-solid-svg-icons';
import { ProductVariant } from 'src/app/shared/interfaces/product-variant';

@Component({
  selector: 'app-product-pricing',
  templateUrl: './product-pricing.component.html',
  styleUrls: ['./product-pricing.component.scss']
})
export class ProductPricingComponent implements OnInit{
  
  @Input() productVariant!: ProductVariant
  @Output() handleClickButtonBuyEmitter = new EventEmitter<void>;
  @Output() handleClickButtonCartEmitter = new EventEmitter<void>;
  @Output() valueAmountEmitter = new EventEmitter<number>;

  emitHandleClickButtonBuy(){
    this.handleClickButtonBuyEmitter.emit();
  }
  
  emitHandleClickButtonCart(){
    this.handleClickButtonCartEmitter.emit();
  }
  
  faCheck = faCheck;
  faPercent = faPercent;
  
  valueAmount: number = 1;
  errorValue: boolean = false
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  getValueInput(evt: any){
    this.valueAmount = evt;
    this.valueAmountEmitter.emit(this.valueAmount);
  }
  
  getErrorInputValue(evt: any){
    this.errorValue = evt;
  }

}
