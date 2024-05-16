import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { AboutUsComponent } from './feature/home/about-us/about-us.component';
import { ContactComponent } from './feature/contact/contact.component';
import { StoreComponent } from './feature/store/store.component';
import { ProductComponent } from './feature/product/product.component';
import { RegisterComponent } from './feature/register/register.component';
import { LoginComponent } from './feature/login/login.component';
import { SearchComponent } from './feature/search/search.component';
import { CartComponent } from './feature/cart/cart.component';
import { FavoritesComponent } from './feature/favorites/favorites.component';

const routes: Routes = [
  { path: '', title: 'Home | Top Care', component: HomeComponent },
  { path: 'sobre-nos', title: 'Sobre a Top Care', component: AboutUsComponent },
  { path: 'contate-nos', title: 'Contate-nos | Top Care', component: ContactComponent },
  { path: 'nossas-lojas', title: 'Lojas | Top Care', component: StoreComponent },
  { path: 'produto/:id', component: ProductComponent },
  { path: 'registro', title: 'Cadastre-se na Top Care', component: RegisterComponent },
  { path: 'login', title: 'Login | Top Care', component: LoginComponent },
  { path: 'busca', component: SearchComponent },
  { path: 'carrinho', title: 'Carrinho | Top Care', component: CartComponent },
  { path: 'favoritos', title: 'Favoritos | Top Care', component: FavoritesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
