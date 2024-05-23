import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  @Output() selectSavedCard = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  chooseSavedCard() {
    this.selectSavedCard.emit();
  }
}
