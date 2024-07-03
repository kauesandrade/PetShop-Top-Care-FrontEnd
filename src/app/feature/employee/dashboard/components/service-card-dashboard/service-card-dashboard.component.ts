import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ServiceVariant } from 'src/app/shared/interfaces/services/service-variant';

@Component({
  selector: 'app-service-card-dashboard',
  templateUrl: './service-card-dashboard.component.html',
  styleUrls: ['./service-card-dashboard.component.scss']
})
export class ServiceCardDashboardComponent implements OnInit {

  faTrash = faTrash
  @Input() service!: ServiceVariant;

  constructor() { }

  ngOnInit(): void {
  }

  handleClickTrash(){
    console.log(this.service.code);
  }

}
