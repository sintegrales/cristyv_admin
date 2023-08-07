import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PrincipalComponent } from './modulos/principal.component';
import { NavComponent } from './estructura/nav/nav.component';
import { LoginComponent } from './modulos/login/login.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { UsuarioComponent } from './modulos/usuario/usuario.component';
import { CateComponent } from './modulos/cate/cate.component';
import { ProductoComponent } from './modulos/producto/producto.component';
import { ClienteComponent } from './modulos/cliente/cliente.component';
import { PedidoComponent } from './modulos/pedido/pedido.component';
import { PedidoinsComponent } from './modulos/pedidoins/pedidoins.component';
import { NoencontroComponent } from './modulos/noencontro/noencontro.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavComponent,
    LoginComponent,
    UsuarioComponent,
    DashboardComponent,
    NavComponent,
    CateComponent,
    ProductoComponent,
    ClienteComponent,
    PedidoComponent,
    PedidoinsComponent,
    NoencontroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
