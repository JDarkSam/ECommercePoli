import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Users, UsersService } from '../../services/users.service';

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   role: string;
// }

@Component({
  selector: 'app-admin-users',
  standalone:false,
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: Users[] = [];

  constructor(public auth: AuthService, private router: Router,private usersService: UsersService) { }

  ngOnInit(): void {

    this.loadUsers();

  }

  loadUsers(): void {
    this.usersService.getAll().subscribe((users: Users[]) => {
      this.users = users;
    });
  }

  deleteUser(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usersService.delete(id).subscribe(() => {
        alert('Usuario eliminado correctamente');
        this.loadUsers(); 
      });
    }
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}