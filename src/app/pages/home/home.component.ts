import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = [
    { name: 'Altavoz JBL Flip 5', price: '$350.000', image: 'assets/jbl.jpg' },
    { name: 'SSD Sandisk 1TB', price: '$465.000', image: 'assets/sandisk.jpg' },
    { name: 'iPad Pro M4 256GB', price: '$4.299.900', image: 'assets/ipad.jpg' }
  ];

  constructor(private router: Router) {}

  verDetalle(product: any) {
    console.log('Ver detalles de:', product);
  }
}