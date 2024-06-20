import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ServiceVariant } from 'src/app/shared/interfaces/services/service-variant';
import { ServicesService } from 'src/app/shared/services/services/services.service';

@Component({
  selector: 'app-dashboard-service',
  templateUrl: './dashboard-service.component.html',
  styleUrls: ['./dashboard-service.component.scss']
})
export class DashboardServiceComponent implements OnInit {

  constructor( private serviceService: ServicesService) { }

  ngOnInit(): void {
    this.servicesList = this.serviceService.getServicesFirtVariant();
  }

  faSearch = faSearch;
  
  isOpen: boolean = false;
  seachValue: string = '';

  typesOrderBy = [
    "Nome (A-Z)",
    "Nome (Z-A)",
    "Maior Preço",
    "Menor Preço",
  ]

  servicesList: Array<ServiceVariant> = []

  sideBarOpen(evt: any){
    this.isOpen = evt;
  }

  handleClickSeach(){

  }

  getOrderBy(evt: any){
    console.log(evt);
  }

  verifyChar(evt: any){
    console.log(evt);
  }

}
