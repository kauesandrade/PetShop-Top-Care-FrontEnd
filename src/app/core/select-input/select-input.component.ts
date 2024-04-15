import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})

export class SelectInputComponent {

  @Input() opcoes: string[] = ['Homem', 'Mulher', 'Prefiro não dizer'];

  @Input() width: string = "0"
  @Input() height: string = "0"

  @Input() disabled: boolean = false

  @Output() escolha: string = ""

}
