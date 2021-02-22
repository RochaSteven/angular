import { Injectable } from '@angular/core';
import {ListaProducto} from '../../models/listaproductos.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaravelApiService {

  constructor( private http:HttpClient) { }

  getAllProduts():Observable<ListaProducto[]>{
  	let url = "http://127.0.0.1:8000/api/productos"
  	return this.http.get<ListaProducto[]>(url)

  }

}
