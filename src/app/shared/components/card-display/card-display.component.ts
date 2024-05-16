import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss'],
})
export class CardDisplayComponent implements OnChanges {
  @Input() card?: Card;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.card = changes['card'].currentValue;
  }
}
