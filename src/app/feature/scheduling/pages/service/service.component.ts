import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Service } from 'src/app/shared/interfaces/services/service';
import { ServiceCategory } from 'src/app/shared/interfaces/services/service-category';
import { ServiceVariant } from 'src/app/shared/interfaces/services/service-variant';
import { SchedulingService } from 'src/app/shared/services/scheduling/scheduling.service';
import { SearchService } from 'src/app/shared/services/search/search.service';
import { ServicesService } from 'src/app/shared/services/services/services.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  categories?: Array<ServiceCategory>;

  servicesSelected: Array<ServiceVariant> = [];

  searchValue = '';
  faSearch = faSearch;

  constructor(
    private servicesService: ServicesService,
    private schedulingService: SchedulingService
  ) {}

  ngOnInit(): void {
    this.categories = this.servicesService.getServicesCategories();

    if (this.schedulingService.services) {
      this.servicesSelected = this.schedulingService.services;
    }
  }

  handleClickSearch() {
    console.log(this.searchValue);
  }

  onContinue() {
    if (this.servicesSelected && this.servicesSelected.length > 0) {
      this.schedulingService.setServices(this.servicesSelected);
      this.schedulingService.navigateToNextRoute();
    } else {
      alert('Seleciona ai doidão');
    }
  }
}
