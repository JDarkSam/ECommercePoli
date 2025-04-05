import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion-productos',
  standalone:false,
  templateUrl: './creacion-productos.component.html',
  styleUrls: ['./creacion-productos.component.css']
})
export class CreacionProductosComponent implements OnInit {

  nombreProducto: string = '';
  descripcion: string = '';
  precioUnidad: number = 0;
  imagenProducto: any; 

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.imagenProducto = event.target.files[0];
  }

  crearProducto() {
    // Aquí puedes implementar la lógica para crear el producto
    // utilizando los valores de nombreProducto, descripcion,
    // precioUnidad e imagenProducto.
    console.log('Nombre del producto:', this.nombreProducto);
    console.log('Descripción:', this.descripcion);
    console.log('Precio unitario:', this.precioUnidad);
    console.log('Imagen del producto:', this.imagenProducto);

    // Puedes enviar estos datos a un servicio para guardarlos en una base de datos, por ejemplo.
  }
}