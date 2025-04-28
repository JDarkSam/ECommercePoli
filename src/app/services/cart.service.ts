import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Product } from './products.service';

export interface Cart {
  id: string;
  id_user: number;
  date_created: string;
  status: string;
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private endpoint = 'cart';

  constructor(private api: ApiService) {}

  getAll(): Observable<Cart[]> {
    return this.api.get<Cart[]>(this.endpoint);
  }

  getById(id: string): Observable<Cart> {
    return this.api.getById<Cart>(this.endpoint, id);
  }

  create(cart: Cart): Observable<Cart> {
    return this.api.post<Cart>(this.endpoint, cart);
  }

  update(id: string, cart: Cart): Observable<Cart> {
    return this.api.put<Cart>(this.endpoint, id, cart);
  }

  delete(id: string): Observable<Cart> {
    return this.api.delete<Cart>(this.endpoint, id);
  }
}