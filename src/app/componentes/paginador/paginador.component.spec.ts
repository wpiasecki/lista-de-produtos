import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadorComponent } from './paginador.component';

describe('PaginadorComponent', () => {
  let component: PaginadorComponent;
  let fixture: ComponentFixture<PaginadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadorComponent);
    component = fixture.componentInstance;
    component.produtoPagina = {
      page: 1,
      totalPages: 4,
      items: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should return the pages', () => {
    expect(component.paginas).toEqual([1, 2, 3, 4]);
  });
  
  it('should not return actual page', () => {
    expect(component.isPaginaAtual(2)).toBe(false);
  });
  
  it('should return true for actual page', () => {
    expect(component.isPaginaAtual(1)).toBe(true);
  });
});
