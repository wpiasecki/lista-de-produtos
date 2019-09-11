import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoComponent } from './produto.component';

describe('ProdutoComponent', () => {
  let component: ProdutoComponent;
  let fixture: ComponentFixture<ProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoComponent);
    component = fixture.componentInstance;
    component.produto = {
      id: '1',
      price: 1000,
      name: '',
      description: '',
      pictureUrl: ''
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should format number with zeroes', () => {
    expect(component.formatarPreco(1000)).toEqual('R$ 1.000,00');
  });
  
});
