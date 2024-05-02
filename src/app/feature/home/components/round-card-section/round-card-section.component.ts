import { Component, Input, OnInit } from '@angular/core';
import { RoundCard } from '../../../../shared/interfaces/round-card';

@Component({
  selector: 'app-round-card-section',
  templateUrl: './round-card-section.component.html',
  styleUrls: ['./round-card-section.component.scss']
})
export class RoundCardSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: string = '';
  @Input() roundCardList!: Array<RoundCard>;

}
