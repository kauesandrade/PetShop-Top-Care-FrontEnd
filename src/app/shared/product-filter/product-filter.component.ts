import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faFilter, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  
  faFilter = faFilter;
  faTimes = faTimes;
  faTrash = faTrash;

  @Output() emitFilters = new EventEmitter<Array<string>>;
  
  variableFilters: Array<any> = [];
  filters: Array<any> = [
  ];

  typeFilters = [
    {
      title: "Animais",
      variables:[
        {
          variable: "Cachorro",
          isChecked: false
        },
        {
          variable: "Gato",
          isChecked: false
        },
        {
          variable: "Pássaros",
          isChecked: false
        },
        {
          variable: "Outros",
          isChecked: false
        }
      ]
    },
    // {
    //   title: "Porte de Raça",
    //   variables:[
    //     "Mini",
    //     "Pequeno",
    //     "Médio",
    //     "Grande",
    //     "Gigante"
    //   ]
    // },
    // {
    //   title: "Idade",
    //   variables:[
    //     "Filhote",
    //     "Adulto",
    //     "Sênior"
    //   ]
    // },
    // {
    //   title: "Marcas",
    //   variables:[
    //     "Golden",
    //     "Whiskas",
    //     "Pet Iglu",
    //     "Ideia Store"
    //   ]
    // },
    // {
    //   title: "Faixa de Preço",
    //   variables:[
    //     "R$0,00 - R$25,00",
    //     "R$25,00 - R$50,00",
    //     "R$50,00 - R$100,00",
    //     "R$100,00 - R$200,00",
    //     "+ R$200,00"
    //   ]
    // }
  ]

  openFilter: boolean = false;
  
  constructor( private productService: ProductService ) { }
  
  ngOnInit(): void {
  }
  
  takeOffFilter(variableFilter: any) {
    variableFilter.isChecked = false;
    this.applyFilter();
  }

  openFilters() {
    this.openFilter ? this.openFilter = false : this.openFilter = true;
  }

  changeChecked(variableFilter: any){
    variableFilter.isChecked ? variableFilter.isChecked = false : variableFilter.isChecked = true;
  }

  applyFilter(){
    this.variableFilters = []
    this.filters = []
    this.typeFilters.forEach(variablesFilter =>{
      variablesFilter.variables.forEach(variable => {
        if(variable.isChecked){
          this.variableFilters.push(variable);
          this.filters.push(variable.variable);
        }
      });
    })
    this.openFilter = false;
    this.emitFilters.emit(this.filters);
  }
}
