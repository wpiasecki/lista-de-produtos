import { Component, OnInit } from '@angular/core';
import { BuscaProdutoService } from '../../service/busca-produto.service';
import { ProdutoPagina } from '../../modelo/produto.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  produtoPagina: ProdutoPagina;

  constructor(private buscaProdutoService: BuscaProdutoService) { }

  ngOnInit() {
    this.buscaProdutoService.produtos.subscribe(
      result => this.produtoPagina = result);
  }

}

