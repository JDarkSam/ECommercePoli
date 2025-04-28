import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ProductsService, Products } from '../../services/products.service';

@Component({
  selector: 'app-admin-productos',
  standalone: false,
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent implements OnInit {

  products: Products[] = [];
  constructor(public auth: AuthService, private router: Router,private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe((products: Products[]) => {
          this.products = products;
        }); 

  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }


}