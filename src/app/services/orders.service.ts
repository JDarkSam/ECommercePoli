import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export interface Orders {
  id: string;
  id_user: number;
  id_cart: string;
  date_order: string;
  status: string;
  shipped_address: string;
  payment_method: string;
  total_order: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private endpoint = 'order';

  constructor(private api: ApiService) {}

  getAll(): Observable<Orders[]> {
    return this.api.get<Orders[]>(this.endpoint);
  }

  getById(id: string): Observable<Orders> {
    return this.api.getById<Orders>(this.endpoint, id);
  }

  create(order: Orders): Observable<Orders> {
    return this.api.post<Orders>(this.endpoint, order);
  }

  update(id: string, order: Orders): Observable<Orders> {
    return this.api.put<Orders>(this.endpoint, id, order);
  }

  delete(id: string): Observable<Orders> {
    return this.api.delete<Orders>(this.endpoint, id);
  }
}