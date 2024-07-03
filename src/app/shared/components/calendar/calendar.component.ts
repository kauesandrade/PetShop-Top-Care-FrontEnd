import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  addDays,
  addMonths,
  addYears,
  endOfMonth,
  format,
  isSameDay,
  isSameMinute,
  startOfMonth,
  subDays,
  subMonths,
  subYears,
  toDate,
} from 'date-fns';
import { Pet } from '../../interfaces/pet/pet';
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
  @Input() pets?: Pet[];

  @Input() selectedTime?: Date;
  @Output() selectedTimeChange = new EventEmitter<Date | undefined>();

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;

  @ViewChild('monthPicker') monthPicker!: ElementRef<HTMLInputElement>;

  today = new Date();

  monthInputValue = this.formatMonthYear(new Date());
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

  hasSchedule(date: Date) {
    if (this.pets) {
      for (let pet of this.pets) {
        for (let schedule of pet.schedules) {
          if (isSameDay(new Date(schedule.dateTime), date)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  formatMonthYear(date: Date) {
    return format(date, 'yyyy-MM');
  }

  deformatMonthYear(yearMonth: string) {
    let year = parseInt(yearMonth.split('-')[0]);
    let month = parseInt(yearMonth.split('-')[1]) - 1;
    return new Date(year, month, this.selectedDate.getDate());
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
    this.updateCalendar(date);
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

  onSelectMonth(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.selectedDate = this.deformatMonthYear(value);
    this.defineCalendarVariables();
  }

  prevMonth() {
    this.updateCalendar(subMonths(this.selectedDate, 1));
  }

  nextMonth() {
    this.updateCalendar(addMonths(this.selectedDate, 1));
  }

  prevYear() {
    this.updateCalendar(subYears(this.selectedDate, 1));
  }

  nextYear() {
    this.updateCalendar(addYears(this.selectedDate, 1));
  }

  isDateSame(date: Date | string, selectedDate: Date | string) {
    date = new Date(date);
    selectedDate = new Date(selectedDate);
    return isSameDay(date, selectedDate);
  }

  isTimeSame(date: Date, selectedDate: Date) {
    return isSameMinute(date, selectedDate);
  }

  selectToday() {
    this.updateCalendar(this.today);
  }

  selectTime(time: Date) {
    if (this.isTimeSame(time, this.selectedTime!)) {
      this.selectedTime = undefined;
    } else {
      this.selectedTime = time;
    }
    this.selectedTimeChange.emit(this.selectedTime);
  }

  updateCalendar(date: Date) {
    this.selectedTime = undefined;
    this.selectedDate = date;
    this.defineCalendarVariables();
    this.defineAvailableTimes(this.selectedDate);
  }
}
