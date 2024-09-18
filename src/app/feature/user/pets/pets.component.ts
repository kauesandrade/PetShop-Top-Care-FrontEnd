import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/shared/interfaces/pet/pet';
import { UserService } from 'src/app/shared/services/user/user.service';
import { staticImage } from 'src/assets/JsonFiles/staticData/image';
import { staticPet } from 'src/assets/JsonFiles/staticData/pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent implements OnInit {
  pets?: Pet[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (this.userService.loggedUser?.pets) {
      this.pets = this.userService.loggedUser.pets;
    } else {
      this.pets = [staticPet];
    }
  }
}
