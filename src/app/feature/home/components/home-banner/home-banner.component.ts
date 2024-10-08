import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
})
export class HomeBannerComponent {
  constructor(private router: Router) {}

  openPage(page: string) {
    this.router.navigate([page]);
  }
}
