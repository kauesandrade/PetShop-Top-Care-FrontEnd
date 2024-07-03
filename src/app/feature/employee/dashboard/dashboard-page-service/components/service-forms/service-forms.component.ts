import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-service-forms',
  templateUrl: './service-forms.component.html',
  styleUrls: ['./service-forms.component.scss']
})
export class ServiceFormsComponent implements OnInit {

  serviceForm = this.formBuilder.group({
    code: [''],
    title: [''],
    description: [''],
    category: [''],
    typePets: [''],
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
