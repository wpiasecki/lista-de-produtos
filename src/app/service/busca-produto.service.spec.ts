import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BuscaProdutoService } from './busca-produto.service';

describe('BuscaProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: BuscaProdutoService = TestBed.get(BuscaProdutoService);
    expect(service).toBeTruthy();
  });
});
