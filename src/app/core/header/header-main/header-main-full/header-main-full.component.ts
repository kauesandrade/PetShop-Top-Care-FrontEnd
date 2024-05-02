import { Component, OnInit } from '@angular/core';
import {
  faBars,
  faHeart,
  faSearch,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-header-main-full',
  templateUrl: './header-main-full.component.html',
  styleUrls: ['./header-main-full.component.scss'],
})
export class HeaderMainFullComponent implements OnInit {
  faBars = faBars;
  faSearch = faSearch;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;

  drawerIsOpen: boolean = false;
  isLogged!: boolean;
  user!: User | null;
  firstName!: string | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.userService.login({
    //   name: 'Maria da Silva',
    //   email: 'maria@example.com',
    //   cpf: '123.456.789-00',
    //   birth: '1995-10-15',
    //   gender: 'Feminino',
    //   password: 'senha123',
    //   contactInfo: [
    //     { cellphone: '(00) 98765-4321', telephone: '(00) 1234-5678' },
    //     { cellphone: '(00) 99999-9999', telephone: '' },
    //   ],
    //   addresses: [
    //     {
    //       name: 'Casa',
    //       cep: '12345-678',
    //       city: 'São Paulo',
    //       neighborhood: 'Centro',
    //       street: 'Rua Exemplo',
    //       number: 123,
    //       complement: 'Apto 101',
    //     },
    //     {
    //       name: 'Trabalho',
    //       cep: '54321-098',
    //       city: 'São Paulo',
    //       neighborhood: 'Bairro Novo',
    //       street: 'Avenida Principal',
    //       number: 456,
    //     },
    //   ],
    // });
    this.userService.logout();
    this.user = this.userService.loggedUser;
    this.firstName = this.user?.name.split(' ')[0];
    this.isLogged = this.user?.name != null;
  }

  toggleDrawer() {
    this.drawerIsOpen = !this.drawerIsOpen;
    if (this.drawerIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
