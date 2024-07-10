import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Pet } from 'src/app/shared/interfaces/pet/pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetProfile implements OnInit {
  @Input() petProfileForm!: FormGroup;
  @Input() pet!: Pet;

  code!: number;
  profileImg: string | ArrayBuffer = 'assets/images/ProfileImage.png';

  sizes = ['Pequeno', 'Médio', 'Grande', 'Gigante']
  types = ['Cachorro', 'Gato', 'Pássaro', 'Roedores', 'Rápteis', 'Primatas', 'Outros']
  genders = ['Macho', 'Femea', 'Ele que escolhe']
  breeds = ['Bolognese', 'Chihuahua smooth coat', 'Chin japonês', 'Continental toy spainel']

  faDownloadIcon = faDownload;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  initProfileForm() {
    this.petProfileForm = this.formBuilder.group({
      image: [''],
      name: ['Rex'],
      sizes: ['Pequeno'],
      types: ['Cachorro'],
      genders: ['Macho']
    })
  }

  ngOnInit(): void {
    this.code = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.initProfileForm();
  }

  teste() {
    console.log("FEZ O DOWNLOAD PAE");
  }

}
