import { Component, OnInit } from '@angular/core';

interface User {
  nombreCompleto: string;
  usuario: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-modificacion-users',
  standalone:false, 
  templateUrl: './modificacion-users.component.html',
  styleUrls: ['./modificacion-users.component.css']
})
export class ModificacionUsersComponent implements OnInit {

  user: User = {
    nombreCompleto: 'Luisa Barrientos',
    usuario: 'lbarrientos',
    email: 'lbarrientos@poligran.edu.co',
    password: '********'
  };

  constructor() { }

  ngOnInit(): void {
  }

  modificarUsuario() {
    // Aquí puedes implementar la lógica para modificar el usuario
    // utilizando los valores de this.user.
    console.log('Usuario modificado:', this.user);
    // Puedes enviar estos datos a un servicio para guardarlos en una base de datos, por ejemplo.
  }
}