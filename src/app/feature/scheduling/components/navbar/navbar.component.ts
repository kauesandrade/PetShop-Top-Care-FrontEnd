import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  checkIfCompleted(route: string) {
    let url = this.router.url.split('/agendamento/').join('');
    let routes = [
      'pet',
      'localizacao',
      'petshop',
      'servicos',
      'horario',
      'confirmacao',
    ];
    let index = routes.indexOf(route);

    if (index < routes.indexOf(url)) {
      return true;
    }
    return false;
  }
}
