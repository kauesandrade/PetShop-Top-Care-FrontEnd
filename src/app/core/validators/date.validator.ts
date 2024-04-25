import { AbstractControl } from '@angular/forms';

export function DateValidator(control: AbstractControl) {
  let date = new Date(control.value);
  date.setDate(date.getDate() + 1);

  let today = new Date();
  today.setDate(today.getDate() + 1);

  if (date.getFullYear() <= today.getFullYear()) {
    console.log(date);
    console.log(new Date());
    if (date.getMonth() <= today.getMonth()) {
      if (date.getDate() < today.getDate()) {
        return { LessThanToday: true };
      }
    }
  }

  if (date.getDay() == 5 || date.getDay() == 6) {
    return { IsWeekend: true };
  }

  return null;
}
