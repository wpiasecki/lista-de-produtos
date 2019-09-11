import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProdutoPagina } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class BuscaProdutoService {
  
  static ENDPOINT = "http://spakimail.azurewebsites.net/api/Product";

  constructor(private http: HttpClient) { }

  get produtos(): Observable<ProdutoPagina> {
    return this.http.get<ProdutoPagina>(BuscaProdutoService.ENDPOINT);
  }
}
