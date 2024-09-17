import { HttpParams } from '@angular/common/http';
import {
  Component,
  HostListener,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Chart from 'chart.js/auto';
import { ProductResponseCard, ProductResponseSearchPageableDTO } from 'src/app/shared/interfaces/product/product';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';
import { ServiceVariant } from 'src/app/shared/interfaces/services/service-variant';
import { SearchService } from 'src/app/shared/services/search/search.service';
import { ServicesService } from 'src/app/shared/services/services/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  chart: any = [];
  productList: Array<ProductResponseCard> = [];
  service!: ServiceVariant;

  faSearch = faSearch;

  isOpen: boolean = false;

  labels: any = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  data: any = {
    labels: this.labels,
    datasets: [
      {
        label: 'Produtos vendidos',
        data: [65, 59, 80, 81, 56, 55, 40, 1000],
        fill: false,
        borderColor: 'rgb(255, 176, 31)',
        tension: 0.1,
      },
    ],
  };

  constructor(
    private searchService: SearchService,
    private serviceService: ServicesService
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.chart.update();
  }

  ngOnInit(): void {
    // this.searchService.searchProducts('');
    // this.productList = this.searchService.getProductList();
    // this.service = this.serviceService.getServicesVariants()[0];

    this.searchProducts();

    this.chart = new Chart('canvas', {
      type: 'line',
      data: this.data,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  sideBarOpen(evt: any) {
    this.isOpen = evt;
  }

  searchProducts(){
    const searchParams: HttpParams = new HttpParams().set(
      'searchValue', ""
    ).set(
      'sortBy', "Popularidade"
    ).set(
      'page', 0
    ).set(
      'size', 10
    );

    this.searchService.searchProductsDashboard(searchParams, []).subscribe((response) => {
      this.productList = response.content.map((product: ProductResponseSearchPageableDTO) => {
        return product;
      });
    });
  }
}
