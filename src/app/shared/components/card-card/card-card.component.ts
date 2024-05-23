import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/payment/card';

@Component({
  selector: 'app-card-card',
  templateUrl: './card-card.component.html',
  styleUrls: ['./card-card.component.scss'],
})
export class CardCardComponent implements OnInit {
  @Input() card!: Card;

  constructor() {}

  ngOnInit(): void {}
}
