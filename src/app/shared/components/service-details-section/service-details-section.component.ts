import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { Pet } from '../../interfaces/pet/pet';
import { Petshop } from '../../interfaces/petshop/petshop';
import { Schedule } from '../../interfaces/schedule/schedule';
import { ServiceCategory } from '../../interfaces/services/service-category';
import { ServiceVariant } from '../../interfaces/services/service-variant';
import { Address } from '../../interfaces/user/address';
import { PaymentService } from '../../services/payment/payment.service';
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

  faCircle = faCircle;
  numParcels = 2;

  categories: string[] = [];

  constructor(
    private schedulingService: SchedulingService,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.type == 'scheduling') {
      this.pet = this.schedulingService.pet!;
      this.address = this.schedulingService.address!;
      this.petshop = this.schedulingService.petshop!;
      this.services = this.schedulingService.services!;
      this.schedule = this.schedulingService.schedule!;
    }

    if (this.services) {
      for (let service of this.services) {
        if (!this.categories.includes(service.category)) {
          this.categories.push(service.category);
        }
      }
    }
  }

  defineParcelsPrice() {
    return this.totalServicesSum() / this.numParcels;
  }

  totalServicesSum() {
    let total = 0;

    if (this.services) {
      for (let service of this.services) {
        total += service.price;
      }
    }

    return total;
  }

  cancelScheduling() {
    this.schedulingService.cancelScheduling();
  }

  goToPayment() {
    this.paymentService.setParcelsNumber(2);

    let parcels = new Array<number>();
    for (let i = 1; i <= this.paymentService.parcelsNumber; i++) {
      parcels.push(this.totalServicesSum() / i);
    }
    this.paymentService.setParcels(parcels);

    console.log(this.paymentService);

    this.router.navigate(['/agendamento/pagamento']);
  }
}
