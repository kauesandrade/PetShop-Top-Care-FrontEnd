import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { ServiceType } from 'src/app/feature/contact/interfaces/service';

@Component({
  selector: 'app-service-card-dashboard',
  templateUrl: './service-card-dashboard.component.html',
  styleUrls: ['./service-card-dashboard.component.scss']
})
export class ServiceCardDashboardComponent implements OnInit {

  faTrash = faTrash
  // @Input() service!: ServiceType;

  constructor() { }

  ngOnInit(): void {
  }

  handleClickTrash(){

  }

  handleClickEdit(){
    
  }

}
