import { Component } from '@angular/core';

@Component({
  selector: 'app-header-categories',
  templateUrl: './header-categories.component.html',
  styleUrls: ['./header-categories.component.scss'],
})
export class HeaderCategoriesComponent {
  categories = [
    'cachorro',
    'gato',
    'pássaros',
    'roedores',
    'répteis',
    'primatas',
    'outros',
  ];

  constructor() {}
}
