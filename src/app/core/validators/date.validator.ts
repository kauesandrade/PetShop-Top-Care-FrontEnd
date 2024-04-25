import { AbstractControl } from '@angular/forms';

export function DateValidator(control: AbstractControl) {
  let date: Date = new Date(control.value);

  if (date <= new Date()) {
    return { LessThanToday: true };
  }

  if (date.getDay() == 5 || date.getDay() == 6) {
    return { IsWeekend: true };
  }

  return null;
}
