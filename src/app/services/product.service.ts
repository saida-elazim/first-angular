import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface IProduct {
  id: number;
  price: number;
  name: string;
  quantity: number;
  selected: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private urlApi = 'http://localhost:8083/products';

   //methode permet de retourner all Products
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.urlApi);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.urlApi}/${id}`);
  }

  deleteProduct(id : number): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/${id}`);
  }
}
