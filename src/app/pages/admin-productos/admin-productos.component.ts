import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-admin-productos',
  standalone: false,
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent implements OnInit {

  products: Product[] = [
    { id: 1, name: 'Altavoz JBL', price: 350000, description: 'Altavoz JBL Flip 5' },
    { id: 2, name: 'SSD Sandisk 1TB', price: 230000, description: 'Disco Ssd Sandisk 1tb 2.5 Sata' },
    // ... más productos
  ];

  constructor() { }

  ngOnInit(): void {
  }

}