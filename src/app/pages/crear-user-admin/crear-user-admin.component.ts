import { Component, OnInit } from '@angular/core';

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

  user: User = {
    nombreCompleto: '',
    usuario: '',
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  registrarUsuario() {
    // Aquí puedes implementar la lógica para registrar el usuario
    // utilizando los valores de this.user.
    console.log('Usuario registrado:', this.user);
    // Puedes enviar estos datos a un servicio para guardarlos en una base de datos, por ejemplo.
  }
}