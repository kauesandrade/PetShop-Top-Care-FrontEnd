import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card-dashboard',
  templateUrl: './product-card-dashboard.component.html',
  styleUrls: ['./product-card-dashboard.component.scss']
})
export class ProductCardDashboardComponent implements OnInit {

  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
  }

  handleClickTrash(){

  }

  handleClickEdit(){
    
  }

}
