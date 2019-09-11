import { Component, OnInit, Input } from '@angular/core';

import { ProdutoPagina } from '../../modelo/produto.model';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss']
})
export class PaginadorComponent implements OnInit {
  
  @Input() produtoPagina: ProdutoPagina;
  
  constructor() { }

  ngOnInit() {
  }
  
  get paginas () {
    return Array.from(
      { length: this.produtoPagina.totalPages }, 
      (x, i) => i + 1);
  }
  
  isPaginaAtual (pagina) {
    return pagina === this.produtoPagina.page;
  }

}
