import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
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

  serviceForm!: FormGroup;

  variantsForm =  this.formBuilder.group({
    variants: this.formBuilder.array([])
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
        title: this.serviceVariantList[0].title,
        description: this.serviceVariantList[0].description,
        category: this.serviceVariantList[0].category,
        servedPets: this.serviceVariantList[0].servedPets,
        image: this.serviceVariantList[0].image,
      })
      this.titlePage = 'Editar um Serviço'
    } else {
      this.titlePage = 'Adicionar um Serviço'
      console.log("sem objeto");
    }

    this.initServiceForm();
    this.initVariantsForm();
  }

  sideBarOpen(evt: any) {
    this.isOpen = evt;
  }


  addService(){
    console.log(this.serviceForm)
    console.log(this.variantsForm)
  }
  
  updateService(){
    console.log(this.serviceForm)
    console.log(this.variantsForm)
  }

  areFormsValid() {
    return this.serviceForm.valid && this.variantsForm.valid
  }


  initServiceForm(){

    if(this.service){
      this.serviceForm = this.formBuilder.group({
        code: [this.service.code!, [Validators.required, EmptyValidator]],
        title: [this.service.title!, [Validators.required, EmptyValidator]],
        description: [this.service.description!, [Validators.required, EmptyValidator]],
        category: [this.service.category!, [Validators.required, EmptyValidator]],
        servedPets: [this.service.servedPets!, [Validators.required, EmptyValidator]],
        image: [this.service.image!, [Validators.required, EmptyValidator]]
      })
    }else{
      this.serviceForm = this.formBuilder.group({
        code: [, [Validators.required, EmptyValidator]],
        title: [, [Validators.required, EmptyValidator]],
        description: [, [Validators.required, EmptyValidator]],
        category: [, [Validators.required, EmptyValidator]],
        servedPets: [, [Validators.required, EmptyValidator]],
        image: [, [Validators.required, EmptyValidator]]
      })
    }

    console.log(this.serviceForm);

  }

  initVariantsForm(){
    if(this.service){
      for(let variant of this.serviceVariantList){
        this.createNewVariant(variant);
      }
    }
  }

  createNewVariant(serviceVariant: ServiceVariant){
    (<FormArray>this.variantsForm.controls.variants).push(
      this.formBuilder.group({
        code: [serviceVariant.variantCode!, [Validators.required, EmptyValidator]],
        title: [serviceVariant.variantTitle!, [Validators.required, EmptyValidator]],
        price: [serviceVariant.price!, [Validators.required, EmptyValidator]]
      })
    )
  }
}
