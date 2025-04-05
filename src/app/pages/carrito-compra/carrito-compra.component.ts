import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-compra',
  standalone: false,  
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {
  productos = [
    { nombre: 'Altavoz JBL Flip 5', precio: 350000, cantidad: 1 },
    { nombre: 'SSD Sandisk 1TB', precio: 465000, cantidad: 1 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  calcularTotal(): number {
    return this.productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }
}