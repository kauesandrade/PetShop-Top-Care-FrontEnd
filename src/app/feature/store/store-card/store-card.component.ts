import { Component, Input, OnInit } from '@angular/core';
import { StoreCard } from '../interfaces/store-card';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() store!: StoreCard

}
