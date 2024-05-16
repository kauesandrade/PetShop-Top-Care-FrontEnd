import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input-amount',
  templateUrl: './input-amount.component.html',
  styleUrls: ['./input-amount.component.scss']
})
export class InputAmountComponent implements OnInit {
  
  faPlus = faPlus;
  faMinus = faMinus;
  
  @Input() errorLimiter: number = 100;
  @Output() valueEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() errorValueEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  value: number = 1;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  emitValues(error: boolean){
    this.valueEmitter.emit(this.value);
    this.errorValueEmitter.emit(error);
  }
  

  plusValue(){
    if(this.value >= this.errorLimiter ){
      this.value = this.errorLimiter
      this.emitValues(true);
    }else{
      this.value++
      this.emitValues(false);
    }
  }
  
  minusValue(){
    if(this.value > 1){
      this.value--
      this.emitValues(false);
    }
  }

  verifyValue(evt: any){
    if(this.value > this.errorLimiter){
      this.value = this.errorLimiter;
      this.emitValues(true);
    }else if(this.value < 1){
      this.value = 1
    }else{
      this.value = evt.target.value;
      this.emitValues(false);
    }
  }

  verifyChar(evt: any){
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
