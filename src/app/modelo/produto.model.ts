
export interface Produto {
  id: string;
  name: string; 
  description: string; 
  pictureUrl: string;
  price: number;
}


export interface ProdutoPagina {
  page: number;
  totalPages: number;
  items: Produto[];
}
