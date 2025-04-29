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
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getAll().subscribe((products: Products[]) => {
      this.products = products;
    });
  }
  deleteProduct(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productsService.delete(id).subscribe(() => {
        this.products = this.products.filter(product => product.id !== id);
        alert('Producto eliminado exitosamente.');
      }, error => {
        console.error('Error al eliminar el producto:', error);
        alert('Ocurrió un error al eliminar el producto.');
      });
    }
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }


}