import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ProductsService, Products } from '../../services/products.service';

@Component({
  selector: 'app-creacion-productos',
  standalone:false,
  templateUrl: './creacion-productos.component.html',
  styleUrls: ['./creacion-productos.component.css']
})
export class CreacionProductosComponent implements OnInit {

  name: string = '';
  description: string = '';
  price: number = 0;
  image: string = '';

  products: Products[] = [];

  constructor(public auth: AuthService, private router: Router,private productsService: ProductsService) { }


  ngOnInit(): void {
  }

  crearProducto() {
   
    const nuevoProducto = {
      id: '',
      name: this.name,
      price: this.price,
      description: this.description,
      image: this.image
    };

    if (!this.name || !this.description || !this.price || !this.image) {
      console.error('Todos los campos son obligatorios.');
      return;
    }

    this.productsService.create(nuevoProducto).subscribe(
      (response) => {
        console.log('Producto creado exitosamente:', response);
      },
      (error) => {
        console.error('Error al crear el producto:', error);
      }
    );
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.image ="data:"+file.type+";"+e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

} 