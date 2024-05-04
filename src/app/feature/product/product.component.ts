import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private routing: Router) { 
    this.getProduct();
  }

  ngOnInit(): void {
  }
  
  id?: any;

  getProduct(){
    this.id = this.route.snapshot.paramMap.get("id")
    if(this.id >= 3){
      this.routing.navigate(['/'])
    }
  }
}
