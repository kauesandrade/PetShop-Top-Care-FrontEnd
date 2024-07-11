import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Pet } from 'src/app/shared/interfaces/pet/pet';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetProfile implements OnInit {
  @Input() petProfileForm!: FormGroup;
  
  pet!: Pet;
  id!: number;
  editingData = false;

  sizes = ['Pequeno', 'Médio', 'Grande', 'Gigante']
  types = ['Cachorro', 'Gato', 'Pássaro', 'Roedores', 'Rápteis', 'Primatas', 'Outros']
  genders = ['Macho', 'Femea']
  breeds = ['Bolognese', 'Chihuahua smooth coat', 'Chin japonês', 'Continental toy spainel']

  faDownloadIcon = faDownload;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  initProfileForm() {
    this.petProfileForm = this.formBuilder.group({
      image: [''],
      name: [this.pet?.name],
      sizes: [this.pet?.size],
      types: [this.pet?.type],
      genders: [this.pet?.gender],
      data:[this.pet?.birth],
      breeds:[this.pet?.race],
      microship:[this.pet?.microchip],
      color:[this.pet?.color],
      rga:[this.pet?.rga],
      weight:[this.pet?.weight]
    })
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.pet = this.userService.getPetById(this.id)!;
    this.initProfileForm();
    this.disableAllForms();
  }

  teste() {
    console.log("FEZ O DOWNLOAD PAE");
  }

  disableAllForms() {
    this.petProfileForm.disable();
  }

  enableAllForms() {
    this.petProfileForm.enable();
  }

  enableEditing() {
    this.editingData = true;
    this.enableAllForms();
  }

  saveData() {
    this.editingData = false;
    this.disableAllForms();
  }

  areFormsValid() {
    return (
      this.petProfileForm.valid
    );
  }

}
