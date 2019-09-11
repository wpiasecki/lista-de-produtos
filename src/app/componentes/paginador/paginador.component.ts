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
    return [1, 2, 3]
  }
  
  isPaginaAtual (pagina) {
    return pagina === this.produtoPagina.page;
  }

}
