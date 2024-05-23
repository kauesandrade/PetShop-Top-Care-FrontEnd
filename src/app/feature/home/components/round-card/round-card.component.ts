import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-round-card',
  templateUrl: './round-card.component.html',
  styleUrls: ['./round-card.component.scss'],
})
export class RoundCardComponent {
  @Input() imgSrc: string = '';
  @Input() title?: string = '';

  constructor(private routing: Router) {}

  goToSearch(){
      this.routing.navigate(['/busca'], {
        queryParams: { q: this.title },
      });
  }
}
