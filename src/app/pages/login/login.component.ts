import { Router } from '@angular/router';
import { UsersService, Users } from './../../services/users.service';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  error: string | null = null;
  loggedInUser: Users | null = null;

  constructor(private usersService: UsersService,private auth: AuthService,private router: Router) {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/admin-users']);
    }
  } 

  login(): void {
    this.usersService.getAll().subscribe((users: Users[]) => {
      const user = users.find(u => u.user === this.username && u.password === this.password);
      if (user) {
        this.loggedInUser = user;
        this.error = null;
        console.log('Usuario logueado:', user);
        this.auth.login(user);
        if (user.role === 'admin') {
          this.router.navigate(['/admin-users']);
        } else if (user.role === 'user') {
          this.router.navigate(['/home']);          
        } 

      } else {
        this.error = 'Usuario o contraseña incorrectos';
        alert(this.error);
        console.log(this.error);
        this.loggedInUser = null;
        
      }
    });
  }
}
