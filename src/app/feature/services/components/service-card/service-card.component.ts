import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/interfaces/services/service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent implements OnInit {
  @Input() side: string = 'left';
  @Input() service!: Service;

  constructor() {}

  ngOnInit(): void {}
}
