import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    {
      title: "Porte de Raça",
      variables:[
        {
          variable: "Mini",
          isChecked: false
        },
        {
          variable: "Pequeno",
          isChecked: false
        },
        {
          variable: "Médio",
          isChecked: false
        },
        {
          variable: "Grande",
          isChecked: false
        },
        {
          variable: "Gigante",
          isChecked: false
        }
      ]
    },
    {
      title: "Idade",
      variables:[
        {
          variable: "Filhote",
          isChecked: false
        },
        {
          variable: "Adulto",
          isChecked: false
        },
        {
          variable: "Sênior",
          isChecked: false
        }
      ]
    },
    {
      title: "Marcas",
      variables:[
        {
          variable: "Golden",
          isChecked: false
        },
        {
          variable: "Whiskas",
          isChecked: false
        },
        {
          variable: "Pet Iglu",
          isChecked: false
        },
        {
          variable: "Ideia Store",
          isChecked: false
        }
      ]
    },
    {
      title: "Faixa de Preço",
      variables:[
        {
          variable: "R$0,00 - R$25,00",
          isChecked: false
        },
        {
          variable: "R$25,00 - R$50,00",
          isChecked: false
        },
        {
          variable: "R$50,00 - R$100,00",
          isChecked: false
        },
        {
          variable: "R$100,00 - R$200,00",
          isChecked: false
        },
        {
          variable: "+ R$200,00",
          isChecked: false
        }
      ]
    }
  ]

  openFilter: boolean = false;
  
  constructor( private productService: ProductService, private elementRef: ElementRef ) { }
  
  ngOnInit(): void {
  }
  
  takeOffFilter(variableFilter: any) {
    variableFilter.isChecked = false;
    this.applyFilter();
  }

  openFilters() {
    if(this.openFilter){
      this.openFilter = false;
      this.elementRef.nativeElement.ownerDocument.body.style.overflowY = 'scroll';
    }
    else{
      this.openFilter = true;
      this.elementRef.nativeElement.ownerDocument.body.style.overflowY = 'hidden';
    }
  }

  changeChecked(variableFilter: any){
    variableFilter.isChecked ? variableFilter.isChecked = false : variableFilter.isChecked = true;
  }

  clearAllFilters(){
    this.typeFilters.forEach(variablesFilter =>{
      variablesFilter.variables.forEach(variable => {
        variable.isChecked = false;
      });
    })
    this.applyFilter();
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
    this.elementRef.nativeElement.ownerDocument.body.style.overflowY = 'scroll';
    this.emitFilters.emit(this.filters);
  }
}
