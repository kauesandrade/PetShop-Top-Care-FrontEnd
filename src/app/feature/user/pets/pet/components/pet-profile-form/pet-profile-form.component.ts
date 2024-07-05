import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Pet } from 'src/app/shared/interfaces/pet/pet';

@Component({
  selector: 'app-pet-profile-form',
  templateUrl: './pet-profile-form.component.html',
  styleUrls: ['./pet-profile-form.component.scss']
})
export class PetProfileFormComponent implements OnInit {
  @Input() petProfileForm!: FormGroup;
  @Input() pet!: Pet;

  code!: number;
  profileImg: string | ArrayBuffer = 'assets/images/ProfileImage.png';

  size = ['Pequeno', 'Médio', 'Grande', 'Gigante']
  type = ['Cachorro', 'Gato', 'Pássaro', 'Roedores', 'Rápteis', 'Primatas', 'Outros']
  genders = ['Macho', 'Femea', 'Ele que escolhe']
  breed = ['Bolognese', 'Chihuahua smooth coat', 'Chin japonês', 'Continental toy spainel']

  faDownloadIcon = faDownload;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.code = parseInt(this.route.snapshot.paramMap.get('id')!);

  }

  teste() {
    console.log(this.code);
  }

}
