import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Service } from 'src/app/shared/interfaces/services/service';

@Component({
  selector: 'app-service-forms',
  templateUrl: './service-forms.component.html',
  styleUrls: ['./service-forms.component.scss']
})
export class ServiceFormsComponent implements OnInit {

  @Input() service!: Service

  
  serviceForm = this.formBuilder.group({
    code: [0],
    title: [''],
    description: [''],
    category: [''],
    image: [''],
    typePets: [''],
  })
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {

    if(this.service){

      this.serviceForm = this.formBuilder.group({
        code: this.service.code!,
        title: this.service.title!,
        description: this.service.description!,
        category: this.service.category!,
        image: this.service.image!,
        typePets: [''],
      })
    }

  }

}
