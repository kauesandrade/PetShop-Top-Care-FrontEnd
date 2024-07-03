import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-details-section',
  templateUrl: './service-details-section.component.html',
  styleUrls: ['./service-details-section.component.scss'],
})
export class ServiceDetailsSectionComponent implements OnInit {
  @Input() type: 'scheduling' | 'profile' = 'profile';

  constructor() {}

  ngOnInit(): void {}
}
