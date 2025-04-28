import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Users, UsersService } from '../../services/users.service';

interface User {
  nombreCompleto: string;
  usuario: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-crear-user-admin',
  standalone:false,
  templateUrl: './crear-user-admin.component.html',
  styleUrls: ['./crear-user-admin.component.css']
})
export class CrearUserAdminComponent implements OnInit {

   user: Users = {
     user: '',
     name: '',
     email: '',
     password: '',
     role: 'admin'
   };


  constructor(public auth: AuthService, private router: Router,private usersService: UsersService) { }

  ngOnInit(): void {
  }

  crearUsuario(): void {
    if (!this.user.name || !this.user.user || !this.user.email || !this.user.password) {
      console.error('Todos los campos son obligatorios.');
      return;
    }

    this.usersService.create(this.user).subscribe(
      (response) => {
        console.log('Usuario creado exitosamente:', response);
        this.router.navigate(['/admin-users']);
      },
      (error) => {
        console.error('Error al crear el usuario:', error);
      }
    );
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}