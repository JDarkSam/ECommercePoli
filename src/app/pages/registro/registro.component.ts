import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService, Users } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  standalone: false,
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  user: Users = {
    user: '',
    name: '',
    email: '',
    password: '',
    role: 'user'
  };

  constructor(private usersService: UsersService, private router: Router) {}



  crearUsuario(): void {
    if (!this.user.name || !this.user.user || !this.user.email || !this.user.password) {
      console.error('Todos los campos son obligatorios.');
      return;
    }

    this.usersService.create(this.user).subscribe(
      (response) => {
        console.log('Usuario creado exitosamente:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al crear el usuario:', error);
      }
    );
  }

}