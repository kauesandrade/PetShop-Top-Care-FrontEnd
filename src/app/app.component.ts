import { Component } from '@angular/core';
import { MainCarousel } from './shared/interfaces/main-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  itens: Array<MainCarousel> = 
  [{
    imgSrc: "https://www.esker.com/sites/default/files/cp_2-docdel.jpg",
    link: "https://www.esker.com/sites/default/files/cp_2-docdel.jpg"
  },{
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZOkZvrGaHYUzEfJZKGpC7_hBveijyBGcZ1PUi5mTk&s",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZOkZvrGaHYUzEfJZKGpC7_hBveijyBGcZ1PUi5mTk&s"
  },{
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfVjRh_SlpHT6TpIm_iokk0cE53DJQOuDf55xzZSZlg&s",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfVjRh_SlpHT6TpIm_iokk0cE53DJQOuDf55xzZSZlg&s"
  },];
}
