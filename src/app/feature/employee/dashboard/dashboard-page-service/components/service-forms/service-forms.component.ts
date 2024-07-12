import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import pets from '../../../../../../../assets/JsonFiles/pets.json';

@Component({
  selector: 'app-service-forms',
  templateUrl: './service-forms.component.html',
  styleUrls: ['./service-forms.component.scss']
})
export class ServiceFormsComponent implements OnInit {

  @Input() serviceForm!: FormGroup
  @Output() serviceFormChange = new EventEmitter<FormGroup>();

  categories!: Array<string>

  pets!: Array<string>
  typePets: Array<string> = []
  selectPets!: Array<string>
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {

    this.categories = [
      "Clínica",
      "Higiene"
    ]
    this.pets = pets.pets

    this.pets.forEach(pet =>{
        this.typePets.push(pet);
    })

    this.selectPets = this.servedPets?.value

    
    console.log(this.serviceForm);

  }
   
  changeEmitServiceForms(){
    this.serviceFormChange.emit(this.serviceForm);
  }

  get image(){
    return this.serviceForm.get('image');
  }

  get title(){
    return this.serviceForm.get('title');
  }

  get code(){
    return this.serviceForm.get('code');
  }

  get description(){
    return this.serviceForm.get('description');
  }

  get servedPets(){
    return this.serviceForm.get('typePets');
  }

  get category(){
    return this.serviceForm.get('category');
  }

}
