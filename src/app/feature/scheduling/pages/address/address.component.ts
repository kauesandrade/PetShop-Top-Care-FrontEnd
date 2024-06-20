import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/shared/interfaces/user/address';
import { SchedulingService } from 'src/app/shared/services/scheduling/scheduling.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  addresses?: Address[];

  addressSelected?: Address;

  constructor(
    private userService: UserService,
    private schedulingService: SchedulingService
  ) {}

  ngOnInit(): void {
    this.addresses = this.userService.loggedUser?.addresses;
    if (this.schedulingService.address) {
      this.addressSelected = this.schedulingService.address;
    }
  }

  onContinue() {
    if (this.addressSelected) {
      this.schedulingService.setAddress(this.addressSelected);
      this.schedulingService.navigateToNextRoute();
    } else {
      alert('Seleciona ai doidão');
    }
  }
}
