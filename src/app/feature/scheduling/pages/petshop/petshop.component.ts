import { Component, OnInit } from '@angular/core';
import { Petshop } from 'src/app/shared/interfaces/petshop/petshop';
import { PetshopService } from 'src/app/shared/services/petshop/petshop.service';
import { SchedulingService } from 'src/app/shared/services/scheduling/scheduling.service';

@Component({
  selector: 'app-petshop',
  templateUrl: './petshop.component.html',
  styleUrls: ['./petshop.component.scss'],
})
export class PetshopComponent implements OnInit {
  petshops?: Array<Petshop>;

  petshopSelected?: Petshop;

  constructor(
    private petshopService: PetshopService,
    private schedulingService: SchedulingService
  ) {}

  ngOnInit(): void {
    this.petshops = this.petshopService.getPetshops();
    if (this.schedulingService.petshop) {
      this.petshopSelected = this.schedulingService.petshop;
    }
  }

  onContinue() {
    if (this.petshopSelected) {
      this.schedulingService.setPetshop(this.petshopSelected);
      this.schedulingService.navigateToNextRoute();
    } else {
      alert('Você deve selecionar um!');
    }
  }
}
