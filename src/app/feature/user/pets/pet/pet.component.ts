import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Pet } from 'src/app/shared/interfaces/pet/pet';
import { UserService } from 'src/app/shared/services/user/user.service';
import { staticPet } from 'src/assets/JsonFiles/staticData/pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss'],
})
export class PetProfile implements OnInit {
  @Input() petProfileForm!: FormGroup;

  pet!: Pet;
  id!: number;
  editingData = false;

  sizes = ['Pequeno', 'Médio', 'Grande', 'Gigante'];
  types = [
    'Cachorro',
    'Gato',
    'Pássaro',
    'Roedores',
    'Rápteis',
    'Primatas',
    'Outros',
  ];
  genders = ['Macho', 'Fêmea'];
  breeds = [
    'Bolognese',
    'Chihuahua smooth coat',
    'Chin japonês',
    'Continental toy spainel',
  ];

  faDownloadIcon = faDownload;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  initProfileForm() {
    this.petProfileForm = this.formBuilder.group({
      image: [this.pet?.image],
      name: [this.pet?.name],
      sizes: [this.sizes],
      types: [this.pet?.type],
      genders: [this.pet?.gender],
      data: [this.pet?.birth],
      breeds: [this.pet?.race],
      microship: [this.pet?.microchip],
      color: [this.pet?.color],
      rga: [this.pet?.rga],
      weight: [this.pet?.weight],
    });
    this.petProfileForm.get('sizes')?.setValue(this.pet?.size);
    this.petProfileForm.get('types')?.setValue(this.pet?.type);
    this.petProfileForm.get('breeds')?.setValue(this.pet?.race);
    this.petProfileForm.get('genders')?.setValue(this.pet?.gender);
    console.log(this.petProfileForm);
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.pet = this.userService.getPetById(this.id)!;
    if (!this.pet) {
      this.pet = staticPet;
    }
    this.initProfileForm();
    this.disableAllForms();
  }

  teste() {
    console.log('FEZ O DOWNLOAD PAE');
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
    return this.petProfileForm.valid;
  }

  deletePet() {
    this.userService.deletePet(this.id);
    this.router.navigate(['/perfil/pets']);
  }
}
