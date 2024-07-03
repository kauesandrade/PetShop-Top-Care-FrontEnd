import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/feature/contact/interfaces/service';
import { ServicesService } from 'src/app/shared/services/services/services.service';

@Component({
  selector: 'app-dashboard-page-service',
  templateUrl: './dashboard-page-service.component.html',
  styleUrls: ['./dashboard-page-service.component.scss']
})
export class DashboardPageServiceComponent implements OnInit {

  service!: Service
  id!: string;

  isOpen: boolean = false;
  titlePage = "Editar Servico"

  serviceForm = this.formBuilder.group({
    code: [''],
    title: [''],
    littleDescription: [''],
    description: [''],
    // brand: ['']
    // specifications: Array<ProductSpecification>;
    // rating: number;
    // category: Array<Category>;
    // reviews?: Array<ProductReview>;
  })

  variantForm = this.formBuilder.group({
    title: [''],
    code: [''],
    stock: [''],
    price: [''],
    images: [''],
  })

  constructor(private route: ActivatedRoute,
    private serviceService: ServicesService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // this.serviceService.findProduct(this.id);

    // if (typeof this.serviceService.getProduct() == 'object') {
    //   this.product = this.serviceService.getProduct();
    //   this.productVariantsList = this.serviceService.getProductVariants();
    //   this.titlePage = 'Editar um Produto'
    //   console.log(this.product);
    // } else {
    //   this.titlePage = 'Adicionar um Produto'
    //   console.log("sem objeto");
    // }

  }

  sideBarOpen(evt: any) {
    this.isOpen = evt;
  }

  getServiceForms(evt: any){
    console.log(evt);
  }
  
  getVariantForms(evt: any){
    console.log(evt);
  }


}
