import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class BuscaProdutoService {
  
  static ENDPOINT = "http://spakimail.azurewebsites.net/api/Product";

  constructor(private http: HttpClient) { }

  get produtos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(BuscaProdutoService.ENDPOINT);
  }
}
