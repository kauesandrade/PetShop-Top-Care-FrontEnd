import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  faIcon = faSearch

    onSelect(event: string) {
      console.log(event)
    } 
    
    getValue(event: string | boolean) {
      console.log(event)
    } 


}
