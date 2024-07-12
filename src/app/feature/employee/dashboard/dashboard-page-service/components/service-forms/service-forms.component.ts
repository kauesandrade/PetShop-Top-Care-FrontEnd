import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { faCamera, faFile } from '@fortawesome/free-solid-svg-icons';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import pets from '../../../../../../../assets/JsonFiles/pets.json';

@Component({
  selector: 'app-service-forms',
  templateUrl: './service-forms.component.html',
  styleUrls: ['./service-forms.component.scss']
})
export class ServiceFormsComponent implements OnInit, AfterViewInit {

  @Input() serviceForm!: FormGroup
  @Output() serviceFormChange = new EventEmitter<FormGroup>();

  categories!: Array<string>

  pets!: Array<string>
  typePets: Array<string> = []
  selectPets!: Array<string>

  @ViewChild('imageDisplay') imageDisplay!: ElementRef<HTMLDivElement>;

  faFile = faFile
  
  constructor(private formBuilder: FormBuilder) { }

  ngAfterViewInit(): void {
    this.imageDisplay.nativeElement.style.backgroundImage = `url(${this.image?.value})`;
  }
  
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
  }


  onFileChange(event: any) {
    const files = event.target?.files;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {

      this.serviceForm = this.formBuilder.group({
        code: [this.code?.value, [Validators.required, EmptyValidator]],
        title: [this.title?.value, [Validators.required, EmptyValidator]],
        description: [this.description?.value, [Validators.required, EmptyValidator]],
        category: [this.category?.value, [Validators.required, EmptyValidator]],
        servedPets: [this.servedPets?.value, [Validators.required, EmptyValidator]],
        image: [reader.result!.toString(), [Validators.required, EmptyValidator]],
      })

      this.imageDisplay.nativeElement.style.backgroundImage = `url(${this.image?.value})`;
      this.changeEmitServiceForms();
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
