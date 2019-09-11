import { Component, OnInit, Input } from '@angular/core';

import { ProdutoPagina } from '../../modelo/produto.model';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss']
})
export class PaginadorComponent implements OnInit {
  
  @Input() pagina: ProdutoPagina;
  
  constructor() { }

  ngOnInit() {
  }

}
