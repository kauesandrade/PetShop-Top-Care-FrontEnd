import { AbstractControl } from '@angular/forms';

export function EmptyValidator(control: AbstractControl) {
  if (!control.value.trim()) {
    return { isEmpty: true };
  }
  return null;
}
