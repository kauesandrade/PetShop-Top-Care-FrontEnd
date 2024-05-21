import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-by',
  templateUrl: './order-by.component.html',
  styleUrls: ['./order-by.component.scss']
})
export class OrderByComponent implements OnInit {

  @Output() emitOrderBy = new EventEmitter<string>

  @Input() typesOrderBy: Array<string> = [
    'Popularidade',
    'Maior Preço',
    'Menor Preço',
    'Maiores Descontos',
    'Nome (A-Z)',
    'Nome (Z-A)'
  ]

  constructor() { }

  ngOnInit(): void {
    this.emitOrderBy.emit(this.typesOrderBy[0])
  }

  changeOrderBy(evt: any){
    this.emitOrderBy.emit(evt.value)
  }

}
