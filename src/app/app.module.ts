import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    AdminUsersComponent,
    CreacionProductosComponent,
    ModificacionUsersComponent,
    CrearUserAdminComponent,
    AdminProductosComponent,
    CarritoCompraComponent,
    OrdenCompraComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    CommonModule
],
  providers: [
    //rovideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }