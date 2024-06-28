import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { isSameMinute } from 'date-fns';
import { Schedule } from '../../interfaces/schedule/schedule';
import { SchedulingService } from '../../services/scheduling/scheduling.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() type: 'scheduling' | 'profile' = 'scheduling';
  @Input() schedules?: Schedule;

  availableTimes: Array<Date> = [];

  constructor(private schedulingService: SchedulingService) {}

  ngOnInit(): void {
    let unavailableTimes = this.schedulingService.getUnavailableTimes(
      new Date()
    );
    let openTimes = this.schedulingService.getOpenTimes(new Date());

    openTimes.map((openTime) => {
      unavailableTimes.map((unavailableTime) => {
        if (
          !isSameMinute(openTime, unavailableTime) &&
          !this.availableTimes.includes(openTime)
        ) {
          this.availableTimes.push(openTime);
        }
      });
    });
  }
}
