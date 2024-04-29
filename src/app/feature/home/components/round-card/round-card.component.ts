import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-round-card',
  templateUrl: './round-card.component.html',
  styleUrls: ['./round-card.component.scss'],
})
export class RoundCardComponent {
  @Input() imgSrc: string = '';
  @Input() title?: string = '';
}
