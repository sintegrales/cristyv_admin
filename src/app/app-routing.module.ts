import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { PrincipalComponent } from './modulos/principal.component';
import { UsuarioComponent } from './modulos/usuario/usuario.component';
import { CateComponent } from './modulos/cate/cate.component';
import { ProductoComponent } from './modulos/producto/producto.component';
import { ClienteComponent } from './modulos/cliente/cliente.component';
import { PedidoComponent } from './modulos/pedido/pedido.component';
import { PedidoinsComponent } from './modulos/pedidoins/pedidoins.component';
import { NoencontroComponent } from './modulos/noencontro/noencontro.component';
import { ValidaruserGuard } from './guards/validaruser.guard';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent, canActivate: [ValidaruserGuard] },
        { path: 'usuario', component: UsuarioComponent, canActivate: [ValidaruserGuard] },
        { path: 'cate', component: CateComponent, canActivate: [ValidaruserGuard] },
        { path: 'producto', component: ProductoComponent, canActivate: [ValidaruserGuard] },
        { path: 'cliente', component: ClienteComponent, canActivate: [ValidaruserGuard] },
        { path: 'pedido', component: PedidoComponent, canActivate: [ValidaruserGuard] },
        { path: 'pedidoins', component: PedidoinsComponent, canActivate: [ValidaruserGuard] },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
      ]
  },

  { path: 'login', component: LoginComponent },
  { path: '**', component: NoencontroComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
