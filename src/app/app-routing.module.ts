import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './feature/contact/contact.component';
import { AboutUsComponent } from './feature/home/about-us/about-us.component';
import { HomeComponent } from './feature/home/home.component';
import { StoreComponent } from './feature/store/store.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sobre-nos", component: AboutUsComponent},
  {path: "contate-nos", component: ContactComponent},
  {path: "nossas-lojas", component: StoreComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
