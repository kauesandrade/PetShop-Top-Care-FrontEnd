import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { HomeComponent } from './feature/home/home.component';
import { AboutUsComponent } from './feature/home/about-us/about-us.component';
import { ContactComponent } from './feature/contact/contact.component';
import { StoreComponent } from './feature/store/store.component';
import { ProductComponent } from './feature/product/product.component';
import { RegisterComponent } from './feature/register/register.component';
import { LoginComponent } from './feature/login/login.component';
import { SearchComponent } from './feature/search/search.component';
import { CartComponent } from './feature/cart/cart.component';
import { DataComponent } from './feature/user/data/data.component';
import { PetsComponent } from './feature/user/pets/pets.component';
import { OrdersComponent } from './feature/user/orders/orders.component';
import { SubscriptionsComponent } from './feature/user/subscriptions/subscriptions.component';
import { OrderComponent } from './feature/user/orders/order/order.component';
import { FavoritesComponent } from './feature/favorites/favorites.component';
import { ReviewProductComponent } from './feature/user/orders/order/components/review-product/review-product.component';
import { PaymentComponent } from './feature/payment/payment.component';
import { FinishedPaymentComponent } from './feature/payment/finished-payment/finished-payment.component';
import { ServicesComponent } from './feature/services/services.component';

const routes: Routes = [
  { path: '', title: 'Home | Top Care', component: HomeComponent },
  { path: 'sobre-nos', title: 'Sobre a Top Care', component: AboutUsComponent },
  {
    path: 'contate-nos',
    title: 'Contate-nos | Top Care',
    component: ContactComponent,
  },
  {
    path: 'nossas-lojas',
    title: 'Lojas | Top Care',
    component: StoreComponent,
  },
  { path: 'produto/:id', component: ProductComponent },
  {
    path: 'cadastro',
    title: 'Cadastre-se na Top Care',
    component: RegisterComponent,
  },
  { path: 'login', title: 'Login | Top Care', component: LoginComponent },

  { path: 'servicos', title: 'Serviços | Top Care', component: ServicesComponent },

  { path: 'busca', component: SearchComponent },
  {
    path: 'carrinho',
    title: 'Carrinho | Top Care',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: CartComponent,
      },
      {
        path: 'pagamento',
        title: 'Pagamento | Top Care',
        canActivate: [AuthGuard],
        children: [
          { path: '', component: PaymentComponent },
          { path: 'finalizado/:id', component: FinishedPaymentComponent },
        ],
      },
    ],
  },
  {
    path: 'perfil',
    title: 'Perfil | Top Care',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dados',
        pathMatch: 'full',
      },
      {
        path: 'dados',
        component: DataComponent,
      },
      {
        path: 'pets',
        component: PetsComponent,
      },
      {
        path: 'pedidos',
        children: [
          {
            path: '',
            component: OrdersComponent,
          },
          {
            path: ':id',
            children: [
              {
                path: '',
                component: OrderComponent,
              },
              { path: 'avaliar/:id', component: ReviewProductComponent },
            ],
          },
        ],
      },
      {
        path: 'assinaturas',
        component: SubscriptionsComponent,
      },
    ],
  },
  {
    path: 'favoritos',
    title: 'Favoritos | Top Care',
    component: FavoritesComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
