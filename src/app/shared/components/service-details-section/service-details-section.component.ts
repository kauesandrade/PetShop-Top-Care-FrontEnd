import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet/pet';
import { Petshop } from '../../interfaces/petshop/petshop';
import { Schedule } from '../../interfaces/schedule/schedule';
import { ServiceCategory } from '../../interfaces/services/service-category';
import { ServiceVariant } from '../../interfaces/services/service-variant';
import { Address } from '../../interfaces/user/address';
import { SchedulingService } from '../../services/scheduling/scheduling.service';

@Component({
  selector: 'app-service-details-section',
  templateUrl: './service-details-section.component.html',
  styleUrls: ['./service-details-section.component.scss'],
})
export class ServiceDetailsSectionComponent implements OnInit {
  @Input() type: 'scheduling' | 'profile' = 'profile';
  @Input() pet!: Pet;
  @Input() address!: Address;
  @Input() petshop!: Petshop;
  @Input() services!: ServiceVariant[];
  @Input() schedule!: Date;

  categories: string[] = [];

  constructor(private schedulingService: SchedulingService) {}

  ngOnInit(): void {
    if (this.type == 'scheduling') {
      this.pet = this.schedulingService.pet!;
      this.address = this.schedulingService.address!;
      this.petshop = this.schedulingService.petshop!;
      this.services = this.schedulingService.services!;
      this.schedule = this.schedulingService.schedule!;
    }

    for (let service of this.services) {
      if (!this.categories.includes(service.category)) {
        this.categories.push(service.category);
      }
    }
  }

  totalServicesSum() {
    let total = 0;

    for (let service of this.services) {
      total += service.price;
    }

    return total;
  }
}
