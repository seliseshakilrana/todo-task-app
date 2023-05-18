import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeneric } from './igeneric';

interface Identifiable {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class GenericService<T extends Identifiable> implements IGeneric<T> {

  constructor(private httpClient: HttpClient, 
    @Inject('API_URL') private apiUrl: string) 
    {
      console.log(apiUrl);
    }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.apiUrl + "/List");
  }

  getById(id: string): Observable<T> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<T>(url);
  }

  create(item: T): Observable<T> {
    return this.httpClient.post<T>(this.apiUrl, item);
  }

  update(item: T): Observable<T> {
    const url = `${this.apiUrl}/${item.id}`;
    return this.httpClient.put<T>(url, item);
  }

  delete(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }

}
