import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { faCheck, faPercent } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-pricing',
  templateUrl: './product-pricing.component.html',
  styleUrls: ['./product-pricing.component.scss']
})
export class ProductPricingComponent implements OnInit{
  
  @Input() product?: Product
  @Output() handleClickButtonBuyEmitter = new EventEmitter<void>;
  @Output() handleClickButtonCartEmitter = new EventEmitter<void>;
  @Output() valueAmountEmitter = new EventEmitter<number>;

  emitHandleClickButtonBuy(){
    this.handleClickButtonBuyEmitter.emit();
    this.valueAmountEmitter.emit(this.valueAmount);
  }

  emitHandleClickButtonCart(){
    this.handleClickButtonCartEmitter.emit();
    this.valueAmountEmitter.emit(this.valueAmount);
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
  }

  getErrorInputValue(evt: any){
    this.errorValue = evt;
  }

}
