import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective implements OnInit {
  @Input() appButton = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.classList.add('btn');
    if (this.appButton == 'secondary') {
      this.el.nativeElement.classList.add(`secondary`);
    } else {
      this.el.nativeElement.classList.add(`primary`);
    }

    if (this.el.nativeElement.children.length > 0) {
      this.el.nativeElement.classList.add(`icon`);
    }
  }
}
