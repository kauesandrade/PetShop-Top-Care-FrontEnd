import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Address } from 'src/app/shared/interfaces/user/address';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-add-address-card',
  templateUrl: './add-address-card.component.html',
  styleUrls: ['./add-address-card.component.scss'],
})
export class AddAddressCardComponent implements OnInit {
  openModal = false;

  faPlus = faPlus;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  registerAddress(address: Address) {
    let user = this.userService.loggedUser!;
    user?.addresses.push(address);
    this.userService.updateUser(user);
  }
}
