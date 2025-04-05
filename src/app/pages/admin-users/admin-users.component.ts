import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-admin-users',
  standalone:false,
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: User[] = [
    { id: 1, name: 'Sammy Ayra', username: 'sam', email: 'sayra@poligran.edu.co', role: 'Admin' },
    { id: 2, name: 'Luisa Barrientos', username: 'barrientos', email: 'lbarrientos@poligran.edu.co', role: 'Cliente' },
    // ... más usuarios
  ];

  constructor() { }

  ngOnInit(): void {
  }

}