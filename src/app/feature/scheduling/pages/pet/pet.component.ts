import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/shared/interfaces/pet/pet';
import { SchedulingService } from 'src/app/shared/services/scheduling/scheduling.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss'],
})
export class PetComponent implements OnInit {
  pets?: Pet[];

  selectedPet?: Pet;

  constructor(
    private userService: UserService,
    private schedulingService: SchedulingService
  ) {}

  ngOnInit(): void {
    this.pets = this.userService.loggedUser?.pets;
    if (this.schedulingService.pet) {
      this.selectedPet = this.schedulingService.pet;
    }
  }

  onContinue() {
    if (this.selectedPet) {
      this.schedulingService.setPet(this.selectedPet);
      this.schedulingService.navigateToNextRoute();
    } else {
      alert('Seleciona ai doidão');
    }
  }
}
