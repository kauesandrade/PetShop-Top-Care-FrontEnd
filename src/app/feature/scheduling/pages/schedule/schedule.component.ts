import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SchedulingService } from 'src/app/shared/services/scheduling/scheduling.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  timeSelected?: Date;

  constructor(private schedulingService: SchedulingService) {}

  ngOnInit(): void {
    if (this.schedulingService.schedule) {
      this.timeSelected = this.schedulingService.schedule;
    }
  }

  onContinue() {
    if (this.timeSelected) {
      this.schedulingService.setSchedule(this.timeSelected);
      this.schedulingService.navigateToNextRoute();
    } else {
      alert('Seleciona ai doidão');
    }
  }
}
