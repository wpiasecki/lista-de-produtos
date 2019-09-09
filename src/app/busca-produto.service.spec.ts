import { TestBed } from '@angular/core/testing';

import { BuscaProdutoService } from './busca-produto.service';

describe('BuscaProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscaProdutoService = TestBed.get(BuscaProdutoService);
    expect(service).toBeTruthy();
  });
});
