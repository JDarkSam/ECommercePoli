import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export interface Products {
  id?: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private endpoint = 'products';

  constructor(private api: ApiService) {}

  getAll(): Observable<Products[]> {
    return this.api.get<Products[]>(this.endpoint);
  }

  getById(id: string): Observable<Products> {
    return this.api.getById<Products>(this.endpoint, id);
  }

  create(product: Products): Observable<Products> {
    return this.api.post<Products>(this.endpoint, product);
  }

  update(id: string, product: Products): Observable<Products> {
    return this.api.put<Products>(this.endpoint, id, product);
  }

  delete(id: string): Observable<Products> {
    return this.api.delete<Products>(this.endpoint, id);
  }
}