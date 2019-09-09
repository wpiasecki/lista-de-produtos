import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscaProdutoService {
  
  static ENDPOINT = "http://spakimail.azurewebsites.net/api/Product";

  constructor(private http: HttpClient) { }

  get produtos() {
    return this.http.get(BuscaProdutoService.ENDPOINT);
  }
}
