import { Time } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {
  addDays,
  addMonths,
  endOfMonth,
  isSameDay,
  isSameMinute,
  setMonth,
  startOfMonth,
  subDays,
  subMonths,
} from 'date-fns';
import { Schedule } from '../../interfaces/schedule/schedule';
import { SchedulingService } from '../../services/scheduling/scheduling.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, OnChanges {
  @Input() type: 'scheduling' | 'profile' = 'scheduling';
  @Input() schedules?: Schedule;

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  today = new Date();

  selectedDate: Date = this.today;
  calendarBeforeDates: Array<Date> = [];
  calendarMonthDates: Array<Date> = [];
  calendarAfterDates: Array<Date> = [];

  weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  availableTimes: Array<Date> = [];

  constructor(private schedulingService: SchedulingService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.defineCalendarVariables();
  }

  ngOnInit(): void {
    if (this.type == 'scheduling') {
      this.defineAvailableTimes(this.today);
    }
  }

  resetCalendarVariables() {
    this.calendarBeforeDates = [];
    this.calendarMonthDates = [];
    this.calendarAfterDates = [];
  }

  defineCalendarVariables() {
    this.resetCalendarVariables();

    const year = this.selectedDate.getFullYear();
    const month = this.selectedDate.getMonth();

    const sunday = 0;
    const saturday = 6;

    const calendarStartDate = new Date(year, month, 1);
    while (calendarStartDate.getDay() !== sunday) {
      calendarStartDate.setDate(calendarStartDate.getDate() - 1);
      this.calendarBeforeDates.unshift(new Date(calendarStartDate));
    }

    const calendarFinalDate = new Date(year, month + 1, 0);
    while (calendarFinalDate.getDay() !== saturday) {
      calendarFinalDate.setDate(calendarFinalDate.getDate() + 1);
      this.calendarAfterDates.push(new Date(calendarFinalDate));
    }

    let monthStartDate =
      this.calendarBeforeDates[this.calendarBeforeDates.length - 1] ||
      subDays(startOfMonth(this.selectedDate), 1);
    monthStartDate = addDays(monthStartDate, 1);

    let monthFinalDate =
      this.calendarAfterDates[0] || addDays(endOfMonth(this.selectedDate), 1);
    monthFinalDate = subDays(monthFinalDate, 1);

    for (
      let date = new Date(monthStartDate.getTime());
      date <= monthFinalDate;
      date.setDate(date.getDate() + 1)
    ) {
      this.calendarMonthDates.push(new Date(date.getTime()));
    }
  }

  onSelectCalendarDate(date: Date) {
    this.selectedDate = date;
    this.defineAvailableTimes(date);
  }

  defineAvailableTimes(date: Date) {
    this.availableTimes = [];
    let unavailableTimes = this.schedulingService.getUnavailableTimes(date);
    let openTimes = this.schedulingService.getOpenTimes(date);

    openTimes.map((openTime) => {
      if (
        !unavailableTimes.find(
          (unavailable) => unavailable.getTime() == openTime.getTime()
        )
      ) {
        this.availableTimes.push(openTime);
      }
    });
  }

  prevMonth() {
    this.selectedDate = subMonths(this.selectedDate, 1);
    this.defineCalendarVariables();
  }

  pickMonth(e: Event) {
    let month = (e.target as HTMLInputElement).value;
    // Faz o bgl aq pegar o month e year, tá vindo '2024-05'
    month = ;
    if (month) {
      this.selectedDate = setMonth(this.selectedDate, );
    } else {
      this.selectToday();
    }
    console.log(this.selectedDate);
  }

  nextMonth() {
    this.selectedDate = addMonths(this.selectedDate, 1);
    this.defineCalendarVariables();
  }

  isDateSame(date: Date, selectedDate: Date) {
    return isSameDay(date, selectedDate);
  }

  selectToday() {
    this.selectedDate = this.today;
    this.defineAvailableTimes(this.selectedDate);
  }
}
