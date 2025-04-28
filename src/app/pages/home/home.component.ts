import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ProductsService, Products } from '../../services/products.service';
import {  Users } from '../../services/users.service';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Products[] = [];

  constructor(public auth: AuthService, private router: Router,private productsService: ProductsService) { }


  ngOnInit(): void {
    this.productsService.getAll().subscribe((products: Products[]) => {
          this.products = products;
        }); 


  }

  isUser(): boolean {
    const userString = localStorage.getItem('currentUser');
    const user = userString ? JSON.parse(userString) : null;
    return user?.role === 'user';
  }

  verDetalle(product: any) {
    console.log('Ver detalles de:', product);
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}