import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SchedulingService } from 'src/app/shared/services/scheduling/scheduling.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  selectedScheduleTime?: Date;
  userPets = this.userService.loggedUser?.pets;

  constructor(
    private schedulingService: SchedulingService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.schedulingService.schedule) {
      this.selectedScheduleTime = this.schedulingService.schedule;
    }
  }

  onContinue() {
    console.log(this.selectedScheduleTime);

    if (this.selectedScheduleTime) {
      this.schedulingService.setSchedule(this.selectedScheduleTime);
      this.schedulingService.navigateToNextRoute();
    } else {
      alert('Você deve selecionar um!');
    }
  }
}
