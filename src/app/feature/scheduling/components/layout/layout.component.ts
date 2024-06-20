import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Output() continue = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onCancel() {
    this.router.navigate(['/servicos']);
  }

  onContinue() {
    let url = this.router.url.split('/agendamento/').join('');
    let routes = [
      'pet',
      'localizacao',
      'petshop',
      'servicos',
      'horario',
      'confirmacao',
    ];
    let index = routes.indexOf(url);
    this.router.navigate(['/agendamento/' + routes[index + 1]]);
    this.continue.emit();
  }
}
