import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/shared/interfaces/services/service';
import { ServiceVariant } from 'src/app/shared/interfaces/services/service-variant';
import { ServicesService } from 'src/app/shared/services/services/services.service';

@Component({
  selector: 'app-dashboard-page-service',
  templateUrl: './dashboard-page-service.component.html',
  styleUrls: ['./dashboard-page-service.component.scss']
})
export class DashboardPageServiceComponent implements OnInit {

  serviceVariantList!: ServiceVariant[]
  service!: Service
  id!: string;

  isOpen: boolean = false;
  titlePage = ""

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
    
    if (typeof this.serviceService.getServiceVariants(parseInt(this.id))[0] == 'object') {
      this.serviceVariantList = this.serviceService.getServiceVariants(parseInt(this.id));
      this.service = ({
        code: this.serviceVariantList[0].code,
        image: this.serviceVariantList[0].image,
        title: this.serviceVariantList[0].title,
        description: this.serviceVariantList[0].description,
        category: this.serviceVariantList[0].category,
        servedPets: [],
      })
      this.titlePage = 'Editar um Serviço'
    } else {
      this.titlePage = 'Adicionar um Serviço'
      console.log("sem objeto");
    }

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
