import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-compra',
  standalone: false,  
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {
  products = [
    { name: 'Altavoz JBL Flip 5', price: 350000, cantidad: 1,image:'jbl_flip5.png' },
    { name: 'SSD Sandisk 1TB', price: 465000, cantidad: 1, image:'disco_ssd.png' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  calcularTotal(): number {
    return this.products.reduce((total, producto) => total + producto.price * producto.cantidad, 0);
  }
}