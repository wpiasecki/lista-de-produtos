import { Component, OnInit, Input } from '@angular/core';

import { Produto } from '../../modelo/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  @Input() produto: Produto;
  static FORMATTER = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  
  constructor() { }

  ngOnInit() {
  }
  
  formatarPreco(preco) {
    return ProdutoComponent.FORMATTER.format(preco);
  }

}
