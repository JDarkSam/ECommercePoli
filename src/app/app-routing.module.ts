import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { CreacionProductosComponent } from './pages/creacion-productos/creacion-productos.component';
import { ModificacionUsersComponent } from './pages/modificacion-users/modificacion-users.component';
import { CrearUserAdminComponent } from './pages/crear-user-admin/crear-user-admin.component';
import { AdminProductosComponent } from './pages/admin-productos/admin-productos.component';
import { CarritoCompraComponent } from './pages/carrito-compra/carrito-compra.component';
import { OrdenCompraComponent } from './pages/orden-compra/orden-compra.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin-users', component: AdminUsersComponent },  
  { path: 'admin-productos', component: AdminProductosComponent },
  { path: 'crea-productos', component: CreacionProductosComponent },
  { path: 'crea-user-admin', component: CrearUserAdminComponent },
  { path: 'modificar-user', component: ModificacionUsersComponent },
  { path: 'carrito-compra', component: CarritoCompraComponent },
  { path: 'orden-compra', component: OrdenCompraComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }