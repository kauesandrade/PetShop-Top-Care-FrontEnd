import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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

  openTimes: Array<Date> = [];

  constructor(private schedulingService: SchedulingService) {}

  ngOnInit(): void {
    let unavailableTimes = this.schedulingService.getUnavailableTimes();
    for (let time of this.schedulingService.getOpenTimes()) {
      if (!unavailableTimes.includes(time)) {
        this.openTimes.push(time);
      }
    }
  }
}
