import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInput]',
})
export class InputDirective {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.el.nativeElement.children.length == 0) {
      this.el.nativeElement.classList.add('input');
    } else {
      this.el.nativeElement.classList.add('label');
      for (let i = 0; i < this.el.nativeElement.children.length; i++) {
        if (this.el.nativeElement.children[i].nodeName == 'INPUT') {
          this.el.nativeElement.children[i].classList.add('input');
          break;
        }
        if (this.el.nativeElement.children[i].nodeName == 'DIV') {
          this.el.nativeElement.children[i].children[0].classList.add('input');
          break;
        }
      }
    }
  }
}
