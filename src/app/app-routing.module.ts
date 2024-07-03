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
import { DashboardProductComponent } from './feature/functionary/dashboard/dashboard-product/dashboard-product.component';
import { PetComponent } from './feature/scheduling/pages/pet/pet.component';
import { AddressComponent } from './feature/scheduling/pages/address/address.component';
import { PetshopComponent } from './feature/scheduling/pages/petshop/petshop.component';
import { ServiceComponent } from './feature/scheduling/pages/service/service.component';
import { ScheduleComponent } from './feature/scheduling/pages/schedule/schedule.component';
import { ConfirmationComponent } from './feature/scheduling/pages/confirmation/confirmation.component';
import { SchedulingComponent } from './feature/scheduling/scheduling.component';
import { DashboardProductComponent } from './feature/employee/dashboard/dashboard-product/dashboard-product.component';
import { DashboardServiceComponent } from './feature/employee/dashboard/dashboard-service/dashboard-service.component';
import { DashboardOrderComponent } from './feature/employee/dashboard/dashboard-order/dashboard-order.component';
import { DashboardSchedulingComponent } from './feature/employee/dashboard/dashboard-scheduling/dashboard-scheduling.component';
import { DashboardPageProductComponent } from './feature/employee/dashboard/dashboard-page-product/dashboard-page-product.component';
import { DashboardPageServiceComponent } from './feature/employee/dashboard/dashboard-page-service/dashboard-page-service.component';


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

  {
    path: 'servicos',
    title: 'Serviços | Top Care',
    component: ServicesComponent,
  },

  {
    path: 'agendamento',
    title: 'Agendamento | Top Care',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'pet',
        pathMatch: 'full',
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
      {
        path: 'pet',
        component: PetComponent,
      },
      {
        path: 'localizacao',
        component: AddressComponent,
      },
      {
        path: 'petshop',
        component: PetshopComponent,
      },
      {
        path: 'servicos',
        component: ServiceComponent,
      },
      {
        path: 'horario',
        component: ScheduleComponent,
      },
      {
        path: 'confirmacao',
        component: ConfirmationComponent,
      },
    ],
  },

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
  {
    path: 'dashboard',
    title: 'DashBoard | Top Care',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canDeactivate: [AuthGuard],
    children: [
      {
        path: '',
        title: 'Dashboard | Top Care',
        component: DashboardPageProductComponent,
      },

      {
        path: 'produtos',
        title: 'Dashboard Produtos | Top Care',
        component: DashboardProductComponent,
      },
      {
        path: 'produto',
        children: [
          {
            path: '',
            title: 'Adicionar Produto | Top Care',
            component: DashboardPageProductComponent,
          },
          {
            path: ':id',
            title: 'Produto | Top Care',
            component: DashboardPageProductComponent,
          },
        ],
      },

      {
        path: 'servicos',
        title: 'Dashboard Serviços | Top Care',
        component: DashboardServiceComponent
      },
      {
        path: 'servico',
        children: [
          {
            path: '',
            title: 'Adicionar Serviço | Top Care',
            component: DashboardPageServiceComponent,
          },
          {
            path: ':id',
            title: 'Serviço | Top Care',
            component: DashboardPageServiceComponent,
          },
        ],
      },

      {
        path: 'pedidos',
        title: 'Dashboard Pedidos | Top Care',
        component: DashboardOrderComponent
      },
      {
        path: 'pedido/:id',
        title: 'Pedido | Top Care',
        component: FavoritesComponent,
      },

      {
        path: 'agendamentos',
        title: 'Dashboard Agendamentos | Top Care',
        component: DashboardSchedulingComponent
      },
      {
        path: 'agendamento/:id',
        title: 'Agendamento | Top Care',
        component: FavoritesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
