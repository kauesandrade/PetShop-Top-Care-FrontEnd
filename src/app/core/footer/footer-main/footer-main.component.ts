import { Component } from '@angular/core';
import {
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTiktok,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faCommentDots, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.scss'],
})
export class FooterMainComponent {
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faCommentDots = faCommentDots;

  faFacebook = faFacebookSquare;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  faTiktok = faTiktok;
  faPinterest = faPinterest;
  faTwitter = faTwitter;

  constructor() {}
}
