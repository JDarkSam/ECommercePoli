import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export interface Users {
  id?: string;
  user: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private endpoint = 'users';

  constructor(private api: ApiService) {}

  getAll(): Observable<Users[]> {
    return this.api.get<Users[]>(this.endpoint);
  }

  getById(id: string): Observable<Users> {
    return this.api.getById<Users>(this.endpoint, id);
  }

  create(user: Users): Observable<Users> {
    return this.api.post<Users>(this.endpoint, user);
  }

  update(id: string, user: Users): Observable<Users> {
    return this.api.put<Users>(this.endpoint, id, user);
  }

  delete(id: string): Observable<Users> {
    return this.api.delete<Users>(this.endpoint, id);
  }
}