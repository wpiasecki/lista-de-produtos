import { Component, OnInit } from '@angular/core';
import { BuscaProdutoService } from '../busca-produto.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  lista: Produto[];

  constructor(private buscaProdutoService: BuscaProdutoService) { }

  ngOnInit() {
    this.buscaProdutoService.produtos.subscribe(
      result => this.lista = result);
  }

}
