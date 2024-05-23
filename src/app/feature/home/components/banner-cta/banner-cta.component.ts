import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-cta',
  templateUrl: './banner-cta.component.html',
  styleUrls: ['./banner-cta.component.scss']
})
export class BannerCtaComponent implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  
  openPage(page: string) {
    this.router.navigate([page]);
  }

}
