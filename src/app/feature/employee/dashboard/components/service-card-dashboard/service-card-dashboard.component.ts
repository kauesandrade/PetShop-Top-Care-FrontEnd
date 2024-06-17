import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service-card-dashboard',
  templateUrl: './service-card-dashboard.component.html',
  styleUrls: ['./service-card-dashboard.component.scss']
})
export class ServiceCardDashboardComponent implements OnInit {

  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
  }

  handleClickTrash(){

  }

  handleClickEdit(){
    
  }

}
