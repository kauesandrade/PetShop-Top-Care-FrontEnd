import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { AboutUsComponent } from './feature/home/about-us/about-us.component';
import { ContactComponent } from './feature/contact/contact.component';
import { StoreComponent } from './feature/store/store.component';

const routes: Routes = [
  { path: '', title: 'Home | Top Care', component: HomeComponent },
  { path: 'sobre-nos', title: 'Sobre a Top Care', component: AboutUsComponent },
  { path: 'contate-nos', title: 'Contate-nos | Top Care', component: ContactComponent },
  { path: 'nossas-lojas', title: 'Lojas | Top Care', component: StoreComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
