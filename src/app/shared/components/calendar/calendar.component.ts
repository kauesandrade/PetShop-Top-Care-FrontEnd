import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from '../../interfaces/schedule/schedule';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() type: 'scheduling' | 'profile' = 'scheduling';
  @Input() schedules?: Schedule;
  @Input() unavailableTimes?: Array<Date>;

  constructor() {}

  ngOnInit(): void {}
}
