import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { AboutUsComponent } from './feature/home/about-us/about-us.component';
import { ContactComponent } from './feature/contact/contact.component';
import { StoreComponent } from './feature/store/store.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nos', component: AboutUsComponent },
  { path: 'contate-nos', component: ContactComponent },
  { path: 'nossas-lojas', component: StoreComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
