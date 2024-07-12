import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
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

  @ViewChild('imageDisplay') imageDisplay!: ElementRef<HTMLDivElement>;

  faCamera = faCamera
  
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

  onFileChange(event: any) {
    const files = event.target?.files;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      console.log(reader.result!.toString());

      this.imageDisplay.nativeElement.style.backgroundImage = `url(${reader.result!.toString()})`;
    };
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
