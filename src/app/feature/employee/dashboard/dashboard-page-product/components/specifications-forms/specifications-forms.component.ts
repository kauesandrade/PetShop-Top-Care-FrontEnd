import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/shared/interfaces/product/product';

@Component({
  selector: 'app-specifications-forms',
  templateUrl: './specifications-forms.component.html',
  styleUrls: ['./specifications-forms.component.scss']
})
export class SpecificationsFormsComponent implements OnInit {

  @Input() product?: Product
  specificationsOpen = false;

  faPlus = faPlus;
  faTrash = faTrash;
  faTimes = faTimes;

  specificationForm = this.formBuilder.group({
    title: [''],
    description: [''],
  })


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  addSpecifications() {
    this.specificationsOpen = !this.specificationsOpen;
  }

}
